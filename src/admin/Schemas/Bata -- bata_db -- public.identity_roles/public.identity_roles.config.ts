import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    identity_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.user_identities",
        column: "id"
    },
    role_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.user_roles",
        column: "id"
    }
};

module.exports = { schema };