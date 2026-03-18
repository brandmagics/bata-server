import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    email: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 254
        }
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
    otp: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 6
        }
    },
    otp_for: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 10
        }
    },
    email_verified: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    mobile_verified: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    created_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    user_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.admin_app_customuser",
        column: "id"
    }
};

module.exports = { schema };