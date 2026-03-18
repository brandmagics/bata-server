import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    event_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.calendar_events",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    event_date: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    start_time: EType.date,
    end_time: EType.date,
    is_completed: EType.boolean,
    created_at: EType.date
};

module.exports = { schema };