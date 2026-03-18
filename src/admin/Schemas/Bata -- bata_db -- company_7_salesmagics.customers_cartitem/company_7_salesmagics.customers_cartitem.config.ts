import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    custom_width: EType.number,
    custom_height: EType.number,
    size_unit: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 10
        }
    },
    design_image: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    quantity: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    price: EType.number,
    total_price: <ISchemaProperty>{
        __type: EType.number,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    status: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 15
        }
    },
    created_at: <ISchemaProperty>{
        __type: EType.date,
        validations: <IPropertyValidation>{
            required: true
        }
    },
    design_description: EType.string,
    thickness_object_id: EType.number,
    delivery_object_id: EType.number,
    installation_object_id: EType.number,
    turnaround_object_id: EType.number,
    distance_object_id: EType.number,
    is_smart: EType.boolean,
    cart_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.customers_cart",
        column: "id"
    },
    delivery_content_type_id: EType.number,
    distance_content_type_id: EType.number,
    hire_designer_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.products_designer_rate",
        column: "id"
    },
    installation_content_type_id: EType.number,
    product_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.products_product",
        column: "id"
    },
    thickness_content_type_id: EType.number,
    turnaround_content_type_id: EType.number
};

module.exports = { schema };