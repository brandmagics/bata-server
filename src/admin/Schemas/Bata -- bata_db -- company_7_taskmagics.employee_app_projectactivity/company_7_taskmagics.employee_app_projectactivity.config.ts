import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    activity_type: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 50
        }
    },
    description: <ISchemaProperty>{
        __type: EType.string,
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
    created_by_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.accounts_customuser",
        column: "id"
    },
    project_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_project",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    task_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_task",
        column: "id"
    },
    task_comment_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_taskcomment",
        column: "id"
    },
    timesheet_entry_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_timesheetentry",
        column: "id"
    }
};

module.exports = { schema };