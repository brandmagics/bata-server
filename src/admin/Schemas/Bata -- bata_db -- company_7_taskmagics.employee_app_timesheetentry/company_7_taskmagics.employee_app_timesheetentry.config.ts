import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    employee_id: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    start_timestamp: EType.date,
    end_timestamp: EType.date,
    task_start_time: EType.date,
    start_location: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    start_latitude: EType.number,
    start_longitude: EType.number,
    end_location: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 255
        }
    },
    end_latitude: EType.number,
    end_longitude: EType.number,
    description: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    elapsed_seconds: EType.number,
    previous_elapsed_seconds: EType.number,
    hours_worked_hms: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 20
        }
    },
    status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 20
        }
    },
    hours_worked: EType.number,
    notes: EType.string,
    file_attachment: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 500
        }
    },
    created_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    checklist_task_instance_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.ProjectTemplateApp_recurringtaskinstance",
        column: "id"
    },
    project_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_project",
        column: "id"
    },
    task_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_task",
        column: "id"
    },
    task_assignment_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_task_assignment",
        column: "id"
    }
};

module.exports = { schema };