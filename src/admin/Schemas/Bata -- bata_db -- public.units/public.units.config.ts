import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    brand_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.brands",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    entity_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.entities",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    unit_type: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 50
        }
    }
};

module.exports = { schema };