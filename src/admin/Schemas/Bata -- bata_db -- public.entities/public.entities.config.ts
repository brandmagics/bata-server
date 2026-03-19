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
    name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    reg_number: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 255
        }
    },
    country: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 100
        }
    },
    address: EType.string
};

module.exports = { schema };