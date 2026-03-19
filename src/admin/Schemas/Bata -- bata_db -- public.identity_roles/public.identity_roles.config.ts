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
    role_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.user_roles",
        column: "id"
    }
};

module.exports = { schema };