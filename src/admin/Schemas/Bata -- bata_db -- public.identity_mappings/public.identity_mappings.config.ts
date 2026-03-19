import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.string,
        isPrimaryKey: true,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    identity_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.user_identities",
        column: "id"
    },
    brand_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.brands",
        column: "id"
    },
    entity_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.entities",
        column: "id"
    },
    unit_id: <ISchemaProperty>{
        __type: EType.string,
        table: "public.units",
        column: "id"
    }
};

module.exports = { schema };