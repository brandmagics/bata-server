import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 50
        }
    },
    description: EType.string,
    price_percentage: EType.number,
    price_decimal: EType.number,
    is_active: <ISchemaProperty>{
        __type: EType.boolean,
        validations: <IPropertyValidation>{
            required: true
        }
    }
};

module.exports = { schema };