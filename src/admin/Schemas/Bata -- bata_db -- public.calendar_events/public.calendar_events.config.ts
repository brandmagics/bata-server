import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    title: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 255
        }
    },
    event_type_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.event_types",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    category_id: <ISchemaProperty>{
        __type: EType.number,
        table: "public.calendar_categories",
        column: "id"
    },
    workspace_id: EType.number,
    is_all_day: EType.boolean,
    created_by: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    created_at: EType.date,
    updated_at: EType.date
};

module.exports = { schema };