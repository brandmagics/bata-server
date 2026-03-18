import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    mobile: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 20
        }
    },
    country_code: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 5
        }
    },
    verified_email: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    verified_mobile: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 300
        }
    },
    user_id: EType.number
};

module.exports = { schema };