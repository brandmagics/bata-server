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
    assigned_date: EType.date,
    due_date: EType.date,
    priority: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 10
        }
    },
    status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    is_overdue: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    assignment_reason: EType.string,
    task_id: EType.number
};

module.exports = { schema };