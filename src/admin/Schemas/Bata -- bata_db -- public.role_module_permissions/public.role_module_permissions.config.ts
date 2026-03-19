import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.string,
        isPrimaryKey: true,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    role_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.user_roles",
        column: "id"
    },
    module_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.modules",
        column: "id"
    },
    access_level: EType.string
};

module.exports = { schema };