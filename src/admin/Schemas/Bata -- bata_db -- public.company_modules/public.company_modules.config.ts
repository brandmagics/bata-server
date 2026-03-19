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
        validations: <IPropertyValidation>{
            required: true
        }
    },
    module_id: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    is_active: EType.boolean,
    created_at: EType.date
};

module.exports = { schema };