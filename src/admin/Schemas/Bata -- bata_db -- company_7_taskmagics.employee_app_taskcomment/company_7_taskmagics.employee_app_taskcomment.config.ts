import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    object_id: EType.number,
    comment: <ISchemaProperty>{
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
    content_type_id: EType.number,
    parent_comment_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_taskcomment",
        column: "id"
    },
    receiver_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.accounts_customuser",
        column: "id"
    },
    sender_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.accounts_customuser",
        column: "id"
    },
    task_assignment_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_taskmagics.employee_app_task_assignment",
        column: "id"
    }
};

module.exports = { schema };