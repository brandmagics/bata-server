import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 15
        }
    },
    ordered_date: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    payment_method: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 10
        }
    },
    payment_status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 100
        }
    },
    amount: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    delivered_date: EType.date,
    transaction_id: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 100
        }
    },
    site_visit: EType.boolean,
    site_visit_fee: EType.number,
    vat_percentage: EType.number,
    vat_amount: EType.number,
    address_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.customers_customer_address",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    },
    cart_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.customers_cart",
        column: "id"
    },
    customer_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.customers_customer",
        column: "id",
        validations: <IPropertyValidation>{
            required: true
        }
    }
};

module.exports = { schema };