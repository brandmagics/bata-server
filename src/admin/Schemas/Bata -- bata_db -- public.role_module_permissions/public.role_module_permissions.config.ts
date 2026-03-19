import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    role_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.user_roles",
        column: "id"
    },
    module_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.modules",
        column: "id"
    },
    access_level: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 50
        }
    }
};

module.exports = { schema };