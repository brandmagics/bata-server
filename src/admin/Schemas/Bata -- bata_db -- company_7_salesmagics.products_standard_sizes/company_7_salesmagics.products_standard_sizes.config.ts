import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    standard_sizes: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    width: EType.number,
    height: EType.number,
    unit: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 100
        }
    },
    product_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.products_product",
        column: "id"
    }
};

module.exports = { schema };