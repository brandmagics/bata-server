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
    anonymous_uuid: EType.string,
    product_name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 800
        }
    },
    product_min_width: EType.number,
    product_min_height: EType.number,
    product_max_width: EType.number,
    product_max_height: EType.number,
    product_price: EType.number,
    product_image: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    width: EType.number,
    height: EType.number,
    quantity: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    unit: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 10
        }
    },
    design_data: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    design_image_url: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    created_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    updated_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    customer_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.customers_customer",
        column: "id"
    },
    product_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.products_product",
        column: "id"
    }
};

module.exports = { schema };