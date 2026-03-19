import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    user_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.users",
        column: "id"
    },
    brand_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.brands",
        column: "id"
    },
    entity_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.entities",
        column: "id"
    },
    unit_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.units",
        column: "id"
    }
};

module.exports = { schema };