import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    assigned_to_id: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    assigned_time: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 20
        }
    },
    is_overdue: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    start_time: EType.date,
    pause_time: EType.date,
    resume_time: EType.date,
    completed_time: EType.date,
    admin_verified: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    notes: EType.string,
    file_attachment: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 100
        }
    },
    created_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    updated_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    checklist_task_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.ProjectTemplateApp_checklisttask",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    }
};

module.exports = { schema };