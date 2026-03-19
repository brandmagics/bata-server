import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    role_id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    entity_id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        validations: <IPropertyValidation>{
            required: true
        }
    }
};

module.exports = { schema };