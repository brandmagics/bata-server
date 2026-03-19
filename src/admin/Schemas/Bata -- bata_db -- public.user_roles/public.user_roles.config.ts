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
    brand_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.brands",
        column: "id"
    },
    blueprint: EType.string,
    hierarchy: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 255
        }
    },
    instance_name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 255
        }
    },
    is_read_only: EType.boolean,
    scope_type: EType.string,
    is_all_entities: EType.boolean,
    is_all_units: EType.boolean
};

module.exports = { schema };