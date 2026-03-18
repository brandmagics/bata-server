import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    file_name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    file_url: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 1000
        }
    },
    uploaded_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    file_size: EType.number,
    file_type: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 100
        }
    },
    public_id: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    upload_status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 20
        }
    },
    project_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_project",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    uploaded_by_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.accounts_customuser",
        column: "id"
    }
};

module.exports = { schema };