import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    km: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 50
        }
    },
    unit: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 20
        }
    },
    description: EType.string,
    price_percentage: EType.number,
    price_decimal: EType.number,
    product_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.products_product",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    }
};

module.exports = { schema };