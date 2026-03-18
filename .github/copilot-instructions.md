# API Maker — Copilot Instructions

## What Is This Project?

This is a repository for [API Maker](https://api-maker.com) — a custom backend framework. The local client syncs code between your IDE and the API Maker server in real time via WebSocket. All files under `src/__admin_username__/` are mirrored to and from the live server.

- `localClient.js` — Main sync process (WebSocket connection, file watcher, full-sync logic)
- `local-client.config.js` — Runtime configuration (`webSocketURL`, `syncToken`, `adminUserPath`)
- `am-types/types.ts` — Core TypeScript interfaces and enums used in all custom code
- `am-types/store-types.ts` — Type definitions specific to Third Party API config files
- `src/__admin_username__/` — All API Maker entities, organized by category and "__admin_username__" is dynamic and username of the admin.

## Common notes

- Always convert to ".toString()" while comparing two objectId keys in code
- While changing custom API or any other file, you can check "versions" property in ".yaml" file and go to versions folder and update file based on values of "version" and "isActive" from ".yaml" file. That is active version of that entity so modify that.
- "-1" version will always be there and file name will be "Original.ts" in that. Do not create any extra versions until users asks for that.
- If you want to understand more about types & parameters & about framework, you can refer "am-types/types.ts"
- Never make database calls inside loop. "g.sys.*" or any other method from "g" object should not be used in loop until it is extremely necessary. Create array of id and query db and get all required data and create map and use it in the loop instead of database call.
- To extract information from file name follow this. " -- " = is level/type separator. " - " = is / separator.

---

## Directory Structure: `src/__admin_username__/`

| Folder | Description |
|---|---|
| `Custom APIs/` | User-defined HTTP API endpoints (TypeScript logic + YAML config) |
| `Schedulers/` | Cron job definitions (cron expression in YAML, logic in TS) |
| `Events/` | Event definitions; each event has a `listeners/` subdirectory |
| `Schemas/` | Database collection/table schema definitions (YAML) |
| `Instances/` | Database instance connection configurations (YAML) |
| `Instance API hooks/` | Pre/post hooks for auto-generated instance CRUD APIs |
| `Instance API settings/` | Per-API settings overrides for instance APIs |
| `Collection hooks/` | MongoDB collection-level hooks (fire on any CRUD on a collection) |
| `Database hooks/` | Database-level hooks (fire on any write to a database) |
| `System API hooks/` | Hooks for built-in system APIs (e.g., ENCRYPT_DATA) |
| `Third party APIs/` | Third-party API bundles (e.g., AWS S3); each bundle has an `apis/` subfolder |
| `Third party API settings/` | Per-API settings overrides for third-party API calls |
| `Utility classes/` | Reusable TypeScript classes importable in custom code |
| `DB masters/` | Admin UI page configs (YAML + config TS + logic TS) |
| `DB master utils/` | Utility code used within DB master pages |
| `UI maker styles/` | CSS/style definitions for UI maker pages |
| `Process initializers/` | Scripts that run once when the API Maker process starts |
| `Database migrations/` | One-time database migration scripts |
| `WebSocket events/` | WebSocket event subscription handlers |
| `Test cases/` | API test case definitions |
| `Groups/` | User group (role) definitions |
| `API users/` | API user credentials and group assignments |
| `Admin user/` | Admin user configuration |
| `i18ns/` | Internationalization locale files |
| `types/` | Auto-generated TypeScript `db-interfaces.d.ts` for DB type safety |

---

## Folder Naming Conventions

Names encode relationships using ` -- ` (space-dash-dash-space) as separator:

| Entity | Pattern | Example |
|---|---|---|
| Schema | `{instance} -- {database} -- {collection}` | `mongodb -- test -- default` |
| Collection hook | `{instance} -- {database} -- {collection}` | `mongodb -- test -- default` |
| Database hook | `{instance} -- {database}` | `mongodb -- test` |
| Instance API hook | `{instance} -- {database} -- {collection} -- {apiId}` | `mongodb -- test -- default -- GEN_GET_ALL` |
| Instance API setting | `{instance} -- {database} -- {collection} -- {apiId}` | `mongodb -- test -- default -- GEN_GET_ALL` |
| Third party API bundle | `{bundle-name} -- {version}` | `aws-s3-bucket -- 1.0.0` |
| WebSocket event | `{Category} -- {identifier}` | `Custom APIs -- Hello World` |
| Utility class | `{bundle} - {scope} - {version} - {ns} -- {ClassName}` | `utils -  -- GeneralUtils` |

---

## TypeScript Code Patterns

### Universal Function Signature

All executable code files (Custom APIs, Schedulers, Event Listeners, Hooks, Process Initializers, Migrations) use this exact pattern:

```typescript
import * as T from 'types';
import * as db from 'db-interfaces';

async function main(g: T.IAMGlobal) {
    // Your code here
    return { result: 'value' };
}
module.exports = main;
```

**Rules:**
- Always `async function main(g: T.IAMGlobal)`
- Must use `module.exports = main` (CommonJS — NOT `export default`)
- `import * as T from 'types'` — all framework types/enums
- `import * as db from 'db-interfaces'` — typed DB interfaces generated from schemas

### Error Handling in Custom APIs

```typescript
// Pass `true` as second arg to prevent throwing on error — returns full response object
let saveData = await g.sys.db.saveSingleOrMultiple({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    saveData: { first_name: "Bob" }
}, true);

// Check and throw manually
if (saveData.success === false) throw 'Your data is not saved!';

// Throw string to return error to user
throw 'Invalid input!';
```

---

## The `g` (IAMGlobal) Object — Full API

### `g.req` — Request

```typescript
g.req.headers              // HTTP request headers (get/set)
g.req.headers['x-am-content-type-response'] = 'text/xml';

g.req.params               // URL path parameters
let instanceName = g.req.params['instanceName'];

g.req.query                // URL query params (get/set)
g.req.query['getTotalCount'] = true;

g.req.body                 // Request body (get/set)
g.req.body['first_name'] = "John";

g.req.eventData            // Event payload (for event listeners)
g.req.eventData['first_name'] = "John";

g.req.auth.authAMUser      // API user auth token info
g.req.auth.authAMDB        // DB user auth token info
g.req.auth.authGoogle      // Google OAuth token info
g.req.auth.authAWS         // AWS Cognito token info
g.req.auth.authAzure       // Azure AD token info

g.req.reqInfo.url          // Current request URL
g.req.reqInfo.apiCategory  // e.g., EAPICategoryEnum.CUSTOM_APIS
g.req.reqInfo.apiInfo      // { schemaType, id, name, url }
g.req.isApiRequestFromUser // true if direct user request, false if internal call
```

### `g.res` — Response

```typescript
g.res.statusCode = T.EStatusCode.BAD_REQUEST;
// EStatusCode: OK(200), CREATED(201), NO_CONTENT(204),
//   BAD_REQUEST(400), UNAUTHORIZED(401), FORBIDDEN(403),
//   RESOURCE_NOT_FOUND(404), INTERNAL_SERVER_ERROR(500)

g.res.contentType = T.EContentType.HTML;
// EContentType: JSON, XML, YAML, TEXT, HTML, OCTET_STREAM

g.res.output               // Actual response data (use in post-hooks)
g.res.shared.myKey = 'val' // Share between pre-hook -> main -> post-hook
g.res.errors               // Error details in response
g.res.warnings             // Warning details in response
```

### `g.logger` — Logging

```typescript
g.logger.debug('detail info');
g.logger.log('general message');
g.logger.info('info message');
g.logger.warn('warning message');
g.logger.error('error message', someError);
```

### `g.shared` — Shared State

```typescript
// Set in pre-hook, read in main or post-hook
g.shared.count = 234;
g.shared.userId = 'abc123';

// Clear
delete g.shared.count;
for (const key in g.shared) delete g.shared[key];
```

---

## Database Operations: `g.sys.db.*`

> **Note:** `g.sys.db` uses schema-based APIs. For schemaless MongoDB use `g.sys.db.gen.*` (same methods with `Gen` suffix: `getAllGen`, `getByIdGen`, etc.)

### `getAll` — Fetch all records

```typescript
// Minimal
let result = await g.sys.db.getAll({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
});

// With all options
result = await g.sys.db.getAll({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    headers: {
        "x-am-response-case": "camelCase",
        "x-am-authorization": "TOKEN",
    },
    queryParams: {
        find: { first_name: 'James' },
        skip: 1,
        limit: 10,
        sort: "customer_id",           // ascending; "-customer_id" for descending
        select: "first_name,last_name", // exclude with "-field_name"
        getTotalCount: true,
        deep: [{
            s_key: "customer_id",       // source field (foreign key in current collection)
            t_col: "products",          // target collection/table name
            t_key: "owner_id",          // target field (referenced key)
            t_instance: "TARGET_INSTANCE",  // optional: different instance
            t_db: "TARGET_DB",          // optional: different database
            select: "name,price",       // optional: select target fields
            find: { active: 1 },        // optional: filter target records
            isMultiple: true,           // true = array result, false = single object
            limit: 5,
            skip: 0,
            sort: "name",
            deep: [{ /* nested deep — N-levels supported */ }]
        }]
    }
}, true); // 'true' = don't throw on error, return full response object
```

### `getById` — Fetch single record

```typescript
let result = await g.sys.db.getById({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    id: 2,
    primaryKey: "customer_id",   // optional: override default primary key
    select: "first_name,last_name",
    deep: [{
        s_key: "customer_id",
        t_key: "owner_id",
        t_col: "products",
        select: "name,price"
    }],
    headers: { "x-am-authorization": "TOKEN" }
});
```

### `saveSingleOrMultiple` — Insert records

```typescript
// Single record
let result = await g.sys.db.saveSingleOrMultiple({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    saveData: { "first_name": "Bob", "last_name": "Lin" }
});

// Multiple records (bulk insert)
result = await g.sys.db.saveSingleOrMultiple({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    saveData: [
        { "first_name": "Bob", "last_name": "Lin" },
        { "first_name": "Alice", "last_name": "Page" }
    ],
    headers: { "x-am-authorization": "TOKEN" }
});
```

### `masterSave` — Nested multi-table save with auto-rollback

Schema must define the `collection`/`column` relationship. On failure, all nested saves are automatically reverted.

```typescript
// Single nested save (saves across multiple tables/DBs based on schema config)
let result = await g.sys.db.masterSave({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    saveData: {
        "city_name": "Wembley",       // saves to current collection
        "state_id": {
            "state_name": "London",   // saves to related collection defined in schema
            "country_id": {
                "country_name": "UK"  // saves to deeply nested collection
            }
        }
    }
});

// Multiple nested records
result = await g.sys.db.masterSave({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    saveData: [
        { "city_name": "Wembley", "state_id": { "state_name": "London", "country_id": 302 } },
        { "city_name": "Buffalo", "state_id": { "state_name": "Chicago", "country_id": 303 } }
    ]
});
```

### `updateById` — Update single record

```typescript
let result = await g.sys.db.updateById({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    id: 1,
    primaryKey: "customer_id",     // optional: override primary key
    updateData: { "first_name": "MALLORY" },
    upsert: false,                 // true = create if not found
    returnDocument: 'before',      // 'before' | 'after' (return old or new doc)
    select: "first_name,last_name",
    headers: { "x-am-authorization": "TOKEN" }
});
```

### `updateMany` — Update multiple records

```typescript
// By simple field match
let result = await g.sys.db.updateMany({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    find: { "first_name": "Alice" },
    updateData: { "first_name": "MALLORY" }
});

// With operators
result = await g.sys.db.updateMany({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    find: { "customer_id": { "$in": [2, 3] } },
    updateData: { "last_name": "Brown" }
});

// MongoDB: update nested array element (positional $ operator)
result = await g.sys.db.updateMany({
    instance: "mongodb", database: 'mydb', collection: "customers",
    find: { "customer_id": 2, "ages.birth_year": "1889" },
    updateData: { "ages.$.age": "35" }
});

// MongoDB: $elemMatch for array condition
result = await g.sys.db.updateMany({
    instance: "mongodb", database: 'mydb', collection: "customers",
    find: {
        "ages": { "$elemMatch": { "age": { "$gte": 30 }, "birth_year": { "$lte": 1900 } } }
    },
    updateData: { "first_name": "MALLORY" }
});
```

### `replaceById` — Replace entire document (MongoDB only)

```typescript
let result = await g.sys.db.replaceById({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    id: 1,
    replaceData: { "first_name": "Bob", "last_name": "New" }
});
```

### `removeById` — Delete single record

```typescript
let result = await g.sys.db.removeById({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    id: 101,
    primaryKey: "customer_id",   // optional
    select: "first_name",        // return selected fields of deleted record
    headers: { "x-am-authorization": "TOKEN" }
});
```

### `removeByQuery` — Delete by conditions

```typescript
let result = await g.sys.db.removeByQuery({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    find: { "customer_id": { "$in": [1, 2] } }
});
```

### `query` — Advanced filtered fetch (schema-based)

```typescript
let result = await g.sys.db.query({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    find: { "first_name": "Bob" },  // use any find operator (see Find Operators section)
    select: "first_name,last_name",
    limit: 10,
    skip: 0,
    sort: "customer_id",
    getTotalCount: true,
    deep: [{ s_key: "customer_id", t_key: "owner_id", t_col: "products" }],
    headers: { "x-am-authorization": "TOKEN" }
});
```

### `queryByStream` / `getAllByStream` — Stream large datasets

```typescript
let result = await g.sys.db.queryByStream({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    find: { "status": "active" }
});

result = await g.sys.db.getAllByStream({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
});
```

### `count` — Count matching records

```typescript
let result = await g.sys.db.count({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    find: { "status": "active" }
}, true);
```

### `distinct` / `distinctQuery` — Get distinct values

```typescript
let result = await g.sys.db.distinct({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    field: "city_name"
});

result = await g.sys.db.distinctQuery({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    field: "city_name",
    find: { "pincode": { "$in": [42187, 16047] } }
});
```

### `aggregate` — MongoDB aggregation pipeline

```typescript
let result;
// Group + match + sort + count
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [
        { "$group": { "_id": "$city", "total": { "$sum": "$amount" } } },
        { "$match": { "total": { "$gt": 1000 } } },
        { "$sort": { "total": -1 } },
        { "$count": "CountValue" }
    ]
});

// $lookup (join collections)
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [{
        "$lookup": {
            "from": "products",
            "localField": "customer_id",
            "foreignField": "owner_id",
            "as": "customer_data"
        }
    }]
});

// $project with computed fields
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "orders",
    aggregateQuery: [{
        "$project": {
            "full_name": { "$concat": ["$first_name", " ", "$last_name"] },
            "Grand_Total": { "$multiply": ["$price", "$quantity"] },
            "discount": {
                "$cond": { "if": { "$gt": ["$price", 50000] }, "then": 30, "else": 10 }
            },
            "priceCategory": {
                "$switch": {
                    "branches": [
                        { "case": { "$gt": ["$price", 50000] }, "then": "expensive" },
                        { "case": { "$lt": ["$price", 10000] }, "then": "cheap" }
                    ],
                    "default": "normal"
                }
            }
        }
    }]
});

// $addFields
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [{
        "$addFields": { "full_name": { "$concat": ["$first_name", " ", "$last_name"] } }
    }]
});

// $bucket (range grouping)
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "products",
    aggregateQuery: [{
        "$bucket": {
            "groupBy": "$price",
            "boundaries": [10000, 20000, 30000, 40000, 50000],
            "default": "Other",
            "output": {
                "count": { "$sum": 1 },
                "items": { "$push": { "name": "$name", "price": "$price" } }
            }
        }
    }]
});

// $facet (multiple sub-pipelines)
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "products",
    aggregateQuery: [{
        "$facet": {
            "byPrice": [{ "$bucket": { "groupBy": "$price", "boundaries": [0, 10000, 50000], "default": "Other", "output": { "count": { "$sum": 1 } } } }],
            "byCategory": [{ "$group": { "_id": "$category", "count": { "$sum": 1 } } }]
        }
    }]
});

// $unwind + $sortByCount
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [
        { "$unwind": "$tags" },
        { "$sortByCount": "$tags" }
    ]
});

// Array operators in $project
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [{
        "$project": {
            "first_tag": { "$arrayElemAt": ["$tags", 0] },
            "tag_count": { "$cond": { "if": { "$isArray": "$tags" }, "then": { "$size": "$tags" }, "else": 0 } },
            "has_vip": { "$in": ["vip", "$tags"] },
            "filtered_ages": { "$filter": { "input": "$ages", "as": "a", "cond": { "$gte": ["$$a.age", 18] } } }
        }
    }]
});

// Math operators
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "orders",
    aggregateQuery: [{
        "$project": {
            "netTotal": { "$abs": { "$subtract": ["$total", "$tax"] } },
            "withTax": { "$add": ["$price", "$tax"] },
            "perUnit": { "$divide": ["$price", "$quantity"] },
            "discounted": { "$multiply": ["$price", 0.9] },
            "rounded": { "$ceil": "$price" },
            "floored": { "$floor": "$price" }
        }
    }]
});

// $sample (random documents)
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [{ "$sample": { "size": 5 } }]
});

// $replaceRoot
result = await g.sys.db.aggregate({
    instance: "mongodb", database: 'mydb', collection: "customers",
    aggregateQuery: [{
        "$replaceRoot": { "newRoot": { "full_name": { "$concat": ["$first_name", " ", "$last_name"] } } }
    }]
});
```

### `arrayOperations` — MongoDB array manipulation

```typescript
await g.sys.db.arrayOperations({
    instance: "mongodb", database: 'mydb', collection: "customers",
    find: { "customer_id": 1 },
    operations: [
        // push — add items to array
        { operation: "push", path: "attributes.color", dataToPush: ["YELLOW", "SKY_BLUE"] },

        // pull — remove items matching condition
        { operation: "pull", path: "ages", queryToRemove: { "age": 2, "birth_year": 1989 } },

        // pullAll — remove specific values from simple array
        { operation: "pullAll", path: "attributes.size", dataToPull: [3.5] },

        // pop — remove last (direction: 1) or first (direction: -1)
        { operation: "pop", path: "attributes.color", direction: 1 },

        // addToSet — push only if value is unique
        { operation: "addToSet", dataToSet: { 'ages.birth_year': 1890 }, arrayFilters: [{ 'item.age': 4 }] },

        // set — update element matching arrayFilters
        { operation: "set", dataToSet: { 'ages.birth_year': 1890 }, arrayFilters: [{ 'item.age': 4 }] },
    ],
    select: "customer_id,ages"
});
```

---

## Find Operators

Use in `find` objects for `query`, `removeByQuery`, `updateMany`, `queryParams.find` (in `getAll`), etc.

```typescript
// Comparison
find: { "age": { "$eq": 25 } }           // equal
find: { "age": { "$ne": 25 } }           // not equal
find: { "age": { "$gt": 25 } }           // greater than
find: { "age": { "$gte": 25 } }          // greater than or equal
find: { "age": { "$lt": 25 } }           // less than
find: { "age": { "$lte": 25 } }          // less than or equal

// Array membership
find: { "id": { "$in": [1, 2, 3] } }     // in array
find: { "id": { "$nin": [1, 2, 3] } }    // not in array

// Logical
find: { "$and": [{ "age": 25 }, { "active": 1 }] }
find: { "$or": [{ "age": 25 }, { "city": "London" }] }
find: { "id": { "$not": { "$in": [1, 2, 3, 4] } } }

// String pattern (SQL databases only)
find: { "first_name": { "$like": "Bob%" } }   // starts with
find: { "first_name": { "$like": "%Bob%" } }  // contains

// SQL NULL check
find: { "first_name": { "$isNull": true } }

// MongoDB: nested field path
find: { "ages.birth_year": "1889" }

// MongoDB: nested deep path (Find-join — works with schema's nested collections)
find: { "first_name.customer_id.shipping_id": 2 }

// MongoDB: $regex
find: { "name": { "$regex": "^Bob", "$options": "i" } }

// MongoDB: $elemMatch (match array element with multiple conditions)
find: { "ages": { "$elemMatch": { "age": { "$gte": 30 }, "birth_year": { "$lte": 1900 } } } }
```

---

## Schema: Validations & Conversions

-- Schema files (in `src/admin/Schemas/`) define TypeScript configuration used for validation, conversion, and type definitions.
-- Do not create empty object. You can go nested for nested properties when database type is mongodb.
-- For mongodb type, use "_id: EType.objectId" as primary key and as a unique identifier. Do not generate any other id.

### Full Schema Example

```typescript
import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {

    // --- PRIMARY KEY ---
    customer_id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByAM: true,       // auto-increment via API Maker
        // isAutoIncrementByDB: true,    // auto-increment via database
        validations: { required: true }
    },

    // --- STRING with all validations ---
    email: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            email: true,
            minLength: 5,
            maxLength: 100,
            enum: ['admin', 'user', 'guest'],   // restrict to allowed values
            validatorFun: (email, fullObj) => {
                if (email && email.includes('banned.com')) throw new Error("Domain not allowed");
                return true;
            }
        },
        conversions: {
            trim: true,
            toLowerCase: true,
        }
    },

    // --- NUMBER with min/max ---
    age: <ISchemaProperty>{
        __type: EType.number,
        validations: { required: true, min: 0, max: 150 }
    },

    // --- STRING with all conversions ---
    city_name: <ISchemaProperty>{
        __type: EType.string,
        validations: { required: true },
        conversions: {
            trimStart: true,
            trimEnd: true,
            trim: true,
            toUpperCase: true,       // or toLowerCase: true
            conversionFun: (city_name, fullObj) => {
                if (city_name) return city_name + "_IND";
                return city_name;
            },
            encryption: true,        // encrypt value before saving
            // hashing: true,        // hash value (one-way, cannot decrypt)
        }
    },

    // --- BOOLEAN with default value ---
    active: <ISchemaProperty>{
        __type: EType.boolean,
        conversions: {
            defaults: {
                defaultValue: true,
                shouldReplaceEmptyStringWithDefault: true,
                shouldReplaceNullWithDefault: true,
            }
        }
    },

    // --- DATE with auto-default on create ---
    createdAt: <ISchemaProperty>{
        __type: EType.date,
        conversions: {
            defaults: {
                defaultFun: () => new Date(),  // runs when value is missing
            }
        }
    },

    // --- DATE always auto-set to current time ---
    updatedAt: <ISchemaProperty>{
        __type: EType.date,
        conversions: {
            conversionFun: (val, data) => new Date(),  // always overwrite with now
        }
    },
    
    // --- Nested properties example ---
    nestedItem1: {
        nestedItem2: {
            name: EType.string,
            age: EType.number,
            nestedItem3: {
                __type: EType.string,
            }
        }
    },

    // --- AUTO-GENERATE IDs ---
    guid: <ISchemaProperty>{
        __type: EType.string,
        isAutoGenerateByAM: { valueGeneratorType: T.EValueGeneratorType.GUID_UUID }
    },
    ulid_field: <ISchemaProperty>{
        __type: EType.string,
        isAutoGenerateByAM: { valueGeneratorType: T.EValueGeneratorType.ULID }
    },
    short_id: <ISchemaProperty>{
        __type: EType.string,
        isAutoGenerateByAM: { valueGeneratorType: T.EValueGeneratorType.ShortUUID }
    },
    mongo_object_id: <ISchemaProperty>{
        __type: EType.objectId,
        isAutoGenerateByAM: { valueGeneratorType: T.EValueGeneratorType.ObjectID }
    },

    // --- FOREIGN KEY (same DB, same instance) ---
    owner_id: <ISchemaProperty>{
        __type: EType.number,
        collection: "products",      // target collection/table
        column: "owner_id",          // target column
    },

    // --- FOREIGN KEY (different DB) ---
    state_id: <ISchemaProperty>{
        __type: EType.number,
        database: "geo_db",
        collection: "states",
        column: "state_id",
    },

    // --- FOREIGN KEY (different instance entirely) ---
    region_id: <ISchemaProperty>{
        __type: EType.number,
        instance: "mysql8",
        database: "geo_db",
        collection: "regions",
        column: "region_id",
    },

    // --- FILE UPLOADS ---
    avatar: <ISchemaProperty>{
        __type: EType.file,      // single file
    },
    attachments: <ISchemaProperty>{
        __type: EType.files,     // multiple files
    },

    // --- OPTIMISTIC CONCURRENCY CONTROL ---
    version: <ISchemaProperty>{
        __type: EType.number,
        isConcurrencyControlField: true,
    },
};

module.exports = { schema };
```

### Supported `EType` Values

| Type | Description |
|---|---|
| `EType.string` | Text values |
| `EType.number` | Numeric values (int or float) |
| `EType.boolean` | True/false |
| `EType.date` | Date/datetime |
| `EType.objectId` | MongoDB ObjectID |
| `EType.file` | Single file upload |
| `EType.files` | Multiple file upload |

### Validations Reference

| Validation | Type | Description |
|---|---|---|
| `required` | `boolean` | Field must be present in payload |
| `email` | `boolean` | Must be valid email format |
| `min` | `number` | Minimum numeric value |
| `max` | `number` | Maximum numeric value |
| `minLength` | `number` | Minimum string length |
| `maxLength` | `number` | Maximum string length |
| `enum` | `any[]` | Value must be one of these |
| `validatorFun` | `(value, fullObj) => boolean \| throws` | Custom validation; throw Error to fail |

### Conversions Reference

| Conversion | Type | Description |
|---|---|---|
| `trim` | `boolean` | Remove leading and trailing whitespace |
| `trimStart` | `boolean` | Remove leading whitespace only |
| `trimEnd` | `boolean` | Remove trailing whitespace only |
| `toLowerCase` | `boolean` | Convert to lowercase |
| `toUpperCase` | `boolean` | Convert to uppercase |
| `encryption` | `boolean` | Encrypt value before saving to DB |
| `hashing` | `boolean` | Hash value before saving (one-way) |
| `conversionFun` | `(value, fullObj) => any` | Custom transform — runs even if value is absent |
| `defaults.defaultValue` | `any` | Static default; takes priority over `defaultFun` |
| `defaults.defaultFun` | `() => any` | Dynamic default; called when value is missing |
| `defaults.shouldReplaceEmptyStringWithDefault` | `boolean` | Replace `""` with the default |
| `defaults.shouldReplaceNullWithDefault` | `boolean` | Replace `null` with the default |

---

## System Operations: `g.sys.system.*`

### Encrypt / Decrypt / Hash

```typescript
let encrypted = await g.sys.system.encrypt({ "data": { "name": "Bob" } });
// Returns: { success: true, data: "U2FsdGVkX19iI..." }

let decrypted = await g.sys.system.decrypt("U2FsdGVkX191c+lmyM80ctf4QV18dZ/x17yDh/fRxs4=");
// Returns: { success: true, data: { original object } }

let hashed = await g.sys.system.hash({ "Name": "Alice" });
// Returns: { success: true, data: "be2a6a457cc36a48..." }
```

### Get Token

```typescript
// API user token
let token = await g.sys.system.getToken({
    authTokenType: "AM",
    authTokenAM: { u: "username", p: "password" }
});

// Database/application user token
token = await g.sys.system.getToken({
    authTokenType: "AM_DB",
    authTokenAMDB: {
        instance: "INSTANCE_NAME",
        database: "DB_NAME",
        collection: "users",
        usernameColumn: "email",
        passwordColumn: "password",
        u: "user@example.com",
        p: "mypassword"
    }
});
```

### Get Secret

```typescript
let secret = await g.sys.system.getSecret("common.mySecretKey");
let secrets = await g.sys.system.getSecret(["common.key1", "common.key2"]);
```

### Get Table Meta

```typescript
let meta = await g.sys.system.getTableMeta({
    instance: 'mysql8',
    database: 'inventory',
    collection: 'customers'
});
```

### Execute Raw Query

```typescript
// SQL — MySQL, MariaDB
await g.sys.system.executeQuery({ instance: "mysql", query: "SELECT * FROM inventory.employees;" });
await g.sys.system.executeQuery({ instance: "mysql", query: "CREATE TABLE inventory.logs(id INT AUTO_INCREMENT PRIMARY KEY, msg TEXT);" });
await g.sys.system.executeQuery({ instance: "mysql", query: "ALTER TABLE inventory.employees ADD COLUMN salary DECIMAL(10,2);" });
await g.sys.system.executeQuery({ instance: "mysql", query: "INSERT INTO inventory.logs(msg) VALUES('hello');" });
await g.sys.system.executeQuery({ instance: "mysql", query: "UPDATE inventory.employees SET salary=50000 WHERE id=1;" });
await g.sys.system.executeQuery({ instance: "mysql", query: "DELETE FROM inventory.employees WHERE id=1;" });
await g.sys.system.executeQuery({ instance: "mysql", query: "TRUNCATE TABLE inventory.logs;" });
await g.sys.system.executeQuery({ instance: "mysql", query: "DROP TABLE IF EXISTS inventory.logs;" });

// PostgreSQL (database required for table creation/queries)
await g.sys.system.executeQuery({
    instance: "postgresql",
    database: "e_commerce",
    query: `CREATE TABLE public.customers (customer_id SERIAL PRIMARY KEY, name VARCHAR(100));`
});

// SQL Server
await g.sys.system.executeQuery({ instance: "sql_server", query: "SELECT * FROM inventory.dbo.employees;" });
await g.sys.system.executeQuery({ instance: "sql_server", query: "USE inventory; exec dbo.myStoredProcedure;" });

// Oracle (no semicolons, use backticks)
await g.sys.system.executeQuery({ instance: "oracle", query: `SELECT * FROM "INVENTORY"."employees"` });

// MongoDB — command API
await g.sys.system.executeQuery({ instance: 'mongodb', database: 'mydb', query: { dbStats: 1 } });
await g.sys.system.executeQuery({ instance: 'mongodb', database: 'mydb', query: { listIndexes: "customers" } });
await g.sys.system.executeQuery({
    instance: 'mongodb', database: 'mydb',
    query: { createIndexes: "customers", indexes: [{ key: { email: 1 }, name: "idx_email", unique: true }] }
});
await g.sys.system.executeQuery({
    instance: 'mongodb', database: 'mydb',
    query: { dropIndexes: "customers", index: "idx_email" }
});
```

### Call External API

```typescript
// Simple GET
await g.sys.system.callExternalApi([{
    url: "https://api.example.com/data",
    method: "GET",
    timeout: 5000,
    queryParams: { select: "first_name", limit: 10 },
    headers: { "x-am-authorization": "TOKEN" }
}]);

// Sequential — chain calls (pass output of first to input of next)
await g.sys.system.callExternalApi([
    {
        url: "https://api.example.com/users",
        method: "GET",
        id: "getData",
        headers: { "x-am-authorization": "TOKEN" }
    },
    {
        type: "sequential",
        data: [{
            url: "https://api.example.com/save",
            method: "POST",
            body: {},
            id: "addData",
            preProcess: [{ from: "getData.output.body.data", to: "addData.body" }],
            headers: { "x-am-authorization": "TOKEN" }
        }]
    }
]);

// Parallel — multiple calls at the same time
await g.sys.system.callExternalApi([
    {
        url: "https://api.example.com/save",
        method: "POST",
        body: [{ first_name: "James" }],
        id: "saveApi",
        postProcess: [{ from: "saveApi.output.body.data.id", to: "updateApi.body.id" }],
        headers: { "x-am-authorization": "TOKEN" }
    },
    {
        type: "parallel",
        data: [
            { url: "https://api.example.com/A", method: "PUT", body: {}, id: "updateApi", headers: {} },
            { url: "https://api.example.com/B", method: "GET", headers: {} }
        ]
    }
]);
```

### Emit Events

```typescript
// Trigger event with data and optional specific listeners
await g.sys.system.emitEvent("MY_EVENT_NAME", { userId: 123, action: "login" }, ["ListenerName"]);

// Emit WebSocket event (notifies connected clients)
await g.sys.system.emitEventWS("myWsEvent", { name: "Bob", status: "online" });
```

### Validate Data

```typescript
// Validate against DB schema (does NOT check FK/DB constraints, only schema rules)
await g.sys.system.isValidDataForTable({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME",
    data: { "customer_id": 1, "first_name": "Bob", "email": "bob@example.com" }
});

// Validate against custom API schema
await g.sys.system.isValidDataForCustomAPI({
    name: "MyCustomApiName",
    data: { "field": "value" },
    type: "BODY"    // "BODY" | "QUERY_PARAMS"
});

// Validate against third-party API schema
await g.sys.system.isValidDataForThirdPartyAPI({
    apiBundleName: "aws-s3-bucket",
    apiVersionName: "1.0.0",
    name: "Upload File",
    type: "BODY",
    data: { name: 'myfile.pdf' },
    isArray: false
});
```

---

## Cache Operations: `g.sys.cache.*`

```typescript
// Set keys (with optional TTL in seconds)
await g.sys.cache.setKey([
    { key: "myKey", value: "someValue", ttl: 1500 },   // expires in 1500 seconds
    { key: "objectKey", value: { complex: "object" } }  // no TTL = use system default
]);

// Get key(s)
await g.sys.cache.getKey("myKey");
await g.sys.cache.getKey(["key1", "key2"]);

// Remove key(s)
await g.sys.cache.removeKey("myKey");
await g.sys.cache.removeKey(["key1", "key2"]);

// Reset API caches
await g.sys.cache.resetCacheDB({
    instance: "INSTANCE_NAME", database: 'DB_NAME', collection: "COLLECTION_NAME"
});
await g.sys.cache.resetCacheCustomApis("MyCustomApiName");
await g.sys.cache.resetCacheSystemApis("SYSTEM_API_NAME");
await g.sys.cache.resetCacheThirdPartyApis({ apiBundleName: "aws-s3-bucket", apiVersionName: "1.0.0" });
```

---

## Request Headers Reference

```typescript
headers: {
    // Auth
    "x-am-authorization": "TOKEN",           // API user token (required for secured APIs)
        "x-am-user-authorization": "USER_TOKEN", // End user (app user) token
        "x-aws-authorization": "AWS_TOKEN",      // AWS Cognito token
        "x-google-authorization": "GOOGLE_TOKEN",// Google OAuth token
        "x-azure-authorization": "AZURE_TOKEN",  // Azure AD token

        // Response key case transformation
        "x-am-response-case": "camelCase",
        // Options: noChange | camelCase | capitalCase | constantCase | dotCase
        //          headerCase | noCase | paramCase | pascalCase | pathCase
        //          sentenceCase | snakeCase

        // Flatten nested response objects
        "x-am-response-object-type": "make_flat", // "no_action" | "make_flat"

        // Response format
        "x-am-content-type-response": "text/xml",
        // Options: application/json | text/xml | text/yaml | text/plain | text/html | application/octet-stream

        // Caching
        "x-am-cache-control": "reset_cache",     // "no_action" | "reset_cache"

        // Encryption
        "x-am-get-encrypted-data": "get_only_encryption",
        // Options: no_encryption | get_only_encryption | get_data_and_encryption
        "x-am-encrypted-payload": "true",        // sent payload is encrypted

        // Metadata
        "x-am-meta": "true",                     // include execution metadata in response
        "x-am-secret": "SECRET_ID",              // secret for encrypt/decrypt operations
        "x-am-internationalization": "HINDI",    // error messages in this language
        "x-am-sandbox-timeout": "13000",         // execution timeout (milliseconds, default 13000)
        "x-am-run-in-sandbox": "2",              // sandbox affinity hint (0-3)
        "x-no-compression": "true",              // disable response gzip compression
}
```

---

## Hooks Behaviour

### Pre-hooks — run BEFORE the API executes

```typescript
async function main(g: T.IAMGlobal) {
    // Read/modify request before API runs
    g.req.body['timestamp'] = new Date().toISOString();
    g.req.query['limit'] = 10;

    // Share data with post-hook
    g.shared.startTime = Date.now();

    // Return nothing = continue to next hook / main API
    // Return a value = STOP chain, use this as the response
    // Throw = STOP chain, return error to caller
    if (!g.req.body.email) throw 'Email is required';
}
module.exports = main;
```

### Post-hooks — run AFTER the API executes

```typescript
async function main(g: T.IAMGlobal) {
    // Access/modify the response
    let responseData = g.res.output;
    g.res.output.processedAt = new Date().toISOString();

    // Read from pre-hook
    let startTime = g.shared.startTime;
    g.logger.log(`Execution took ${Date.now() - startTime}ms`);

    // For stream APIs: cannot return data (response already sent to client)
    // For non-stream APIs: returning a value overrides the response
}
module.exports = main;
```

---

## Custom API Config (`.config.ts`)

```typescript
import * as T from 'types';

let customApi: T.ICustomApiSettingsTypes = {
    name: 'My API Name',
    requestMethod: T.ERequestMethod.POST,   // GET | POST | PUT | DELETE
    path: '/my/api/path',
    enableCaching: false,
    acceptOnlyEncryptedData: false,
    errorList: ['Error message for i18n mapping'],
    apiAccessType: T.EAPIAccessType.TOKEN_ACCESS,

    // Optional: override which auth tokens are checked
    // Empty array = only AM authorization required (overrides default secret's authTokenInfo)
    // authTokenInfo: <T.IAuthTokenInfo[]>[],

    resetCacheOnModificationOf: [
        'DB: instance_name:database_name:collection_name',  // reset when this collection changes
        'TP: bundle_name:version',                          // reset when this 3rd-party API is called
        'CA: custom_api_name',                              // reset when this custom API is called
    ],

    fileUpload: {
        enable: false,
        allowFileUploadFields: [T.EFilesVariables.files],
        validations: {}
    }
};
module.exports = customApi;
```

---

## Third Party API Config (`.config.ts`)

```typescript
import { IApiSchema, ERequestMethod, EAPICategoryRedis } from 'store-types';
import * as T from 'types';

let apiSchema: IApiSchema = {
    path: '/my-endpoint',
    name: 'My Endpoint Name',
    requestMethod: ERequestMethod.POST,
    categoryRedis: EAPICategoryRedis.GET_DATA,   // GET_DATA | MODIFY_DATA
    reqBodySchema: {
        bucketName: <T.ISchemaProperty>{
            __type: T.EType.string,
            validations: { required: true }
        },
        count: <T.ISchemaProperty>{
            __type: T.EType.number,
            validations: { required: false, min: 1, max: 100 }
        }
    },
    reqQueryParametersSchema: {},
    errorList: ['Unable to process request'],
};
module.exports = apiSchema;
```

---

## Utility Classes

### Definition

```typescript
class MyUtils {
    add(x: number, y: number) { return x + y; }
    async fetchData(g: any, instance: string, db: string, col: string) {
        return await g.sys.db.getAll({ instance, database: db, collection: col });
    }
}

let temp = new MyUtils();
export = temp;          // CommonJS export — NOT export default
```

### Import in Custom API

```typescript
import * as GeneralUtils from 'utils/GeneralUtils';
import * as S3Util from 'utils/aws-s3-bucket/1.0.0/S3BucketUtility';

GeneralUtils.add(1, 2);
```

---

## DB Master Page Logic (`.ts`)

```typescript
import * as T from 'types';
import * as db from 'db-interfaces';

async function oncePageLoadWithContext($scope: T.IDBMasterUIPageUtilsScope) {
    // Runs once on page load — has full browser DOM access
}
async function gridRender($scope: T.IDBMasterUIPageUtilsScope) {
    // Called when grid renders; access $scope.gridData
}
async function modifyGridRequest($scope: T.IDBMasterUIPageUtilsScope) {
    // Modify API request before grid data is fetched; modify $scope.reqBody
    $scope.reqBody.find = { active: true };
}
async function onceGridDataLoaded($scope: T.IDBMasterUIPageUtilsScope) {
    // Called after grid data loads; access $scope.gridData
}
async function preSaveAndEdit($scope: T.IDBMasterUIPageUtilsScope) {
    // Modify/validate form data before save/edit; access $scope.reqBody
    const formData: db.mongodb.ui_maker.IStudents = $scope.reqBody;
}
async function beforeSaveModalOpen($scope: T.IDBMasterUIPageUtilsScope) { }
async function beforeEditModalOpen($scope: T.IDBMasterUIPageUtilsScope) { }
async function beforeViewModalOpen($scope: T.IDBMasterUIPageUtilsScope) { }
async function columnSelectionChanged($scope: T.IDBMasterUIPageUtilsScope) { }
async function processDataBeforeExport($scope: T.IDBMasterUIPageUtilsScope) {
    // Modify $scope.gridData before CSV export
}
async function processDataBeforePDFExport($scope: T.IDBMasterUIPageUtilsScope) {
    // Access window.jspdf for custom PDF generation
    const { jsPDF } = (<any>window).jspdf;
    const doc = new jsPDF({ orientation: 'landscape', format: 'a4' });
    $scope.jsPdfDoc = doc;
}

// Export — last expression in file (no module.exports!)
const exportedObj = {
    oncePageLoadWithContext, gridRender, modifyGridRequest, onceGridDataLoaded,
    preSaveAndEdit, beforeSaveModalOpen, beforeEditModalOpen, beforeViewModalOpen,
    columnSelectionChanged, processDataBeforeExport, processDataBeforePDFExport,
};
exportedObj;
```

---

## Multi-Tenant Instance Access

Append `::tenantId` to the instance name for tenant-specific access:

```typescript
// Shared structure across all tenants
instance: 'mongodb_mt_structure_8600'

// Tenant-specific
instance: 'mongodb_mt_structure_8600::nike'
instance: 'mongodb_mt_structure_8600::bata'
```

---

## YAML Files Reference

While creating new .yml file, always generate "guid" field and generate 26 characters random capital alpha numeric.

YAML files are server-managed metadata. Do **not** manually change `guid` fields.

**Instance YAML** — `type` values: `MONGO_DB` | `MYSQL` | `POSTGRESQL` | `SQL_SERVER` | `ORACLE` | `MARIA_DB`

**Version convention** — `"-1"` = current draft/working version; `"1.0.0"` = published/versioned snapshot

---

## Instance API IDs (`EAPIIdEnum`)

Used in `Instance API hooks/` and `Instance API settings/` folder names.

**Schema-based** (`SCHEMA_` prefix): `SCHEMA_GET_ALL` · `SCHEMA_GET_ALL_STREAM` · `SCHEMA_GET_BY_ID` · `SCHEMA_POST_BULK_INSERT` · `SCHEMA_MASTER_SAVE` · `SCHEMA_ARRAY_OPERATIONS` · `SCHEMA_UPDATE_MANY` · `SCHEMA_PUT_UPDATE_BY_ID` · `SCHEMA_PUT_REPLACE_BY_ID` · `SCHEMA_DEL_DELETE_BY_ID` · `SCHEMA_POST_QUERY` · `SCHEMA_POST_QUERY_STREAM` · `SCHEMA_POST_QUERY_DELETE` · `SCHEMA_POST_AGGREGATE` · `SCHEMA_POST_COUNT` · `SCHEMA_GET_DISTINCT` · `SCHEMA_POST_DISTINCT_QUERY`

**Generated/Schemaless** (`GEN_` prefix, MongoDB only): Same set with `GEN_` prefix.

**System APIs**: `EXECUTE_PLAIN_QUERY` · `ENCRYPT_DATA` · `DECRYPT_DATA` · `HASH_DATA` · `GET_TOKEN` · `CALL_EXTERNAL_API` · `GET_SECRET` · `GET_REDIS_KEY` · `SET_REDIS_KEY` · `REMOVE_REDIS_KEY` · `RESET_REDIS_CACHE_DB` · `RESET_REDIS_CACHE_CUSTOM_APIS` · `RESET_REDIS_CACHE_SYSTEM_APIS` · `RESET_REDIS_CACHE_TP_APIS` · `GET_TABLE_META` · `EMIT_EVENT` · `EMIT_EVENT_WS` · `IS_VALID_DATA_FOR_TABLE` · `IS_VALID_DATA_FOR_CUSTOM_API` · `IS_VALID_DATA_FOR_THIRD_PARTY_API`

---

## Key Imports Reference

| Import | Usage |
|---|---|
| `import * as T from 'types'` | All framework types, enums, interfaces |
| `import * as db from 'db-interfaces'` | Typed DB interfaces auto-generated from schemas |
| `import { IApiSchema, ERequestMethod, EAPICategoryRedis } from 'store-types'` | Third-party API config types |
| `import { EType, ISchemaProperty, ISchemaType, IPropertyValidation } from 'types'` | Schema definition types |
