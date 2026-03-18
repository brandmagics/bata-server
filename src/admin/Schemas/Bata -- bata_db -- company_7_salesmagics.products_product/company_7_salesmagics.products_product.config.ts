import { ISchemaType, EType, ISchemaProperty, IPropertyValidation } from 'types';
import * as T from 'types';

let schema: ISchemaType = {
    id: <ISchemaProperty>{
        __type: EType.number,
        isPrimaryKey: true,
        isAutoIncrementByDB: true
    },
    type: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            required: true,
            maxLength: 10
        }
    },
    name: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 900
        }
    },
    alternate_names: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 900
        }
    },
    description: EType.string,
    product_overview: EType.string,
    product_specifications: EType.string,
    installation: EType.string,
    image1: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    image2: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    image3: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    image4: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    min_width: EType.number,
    min_height: EType.number,
    max_width: EType.number,
    max_height: EType.number,
    size: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 100
        }
    },
    price: EType.number,
    fixed_price: EType.number,
    amazon_url: <ISchemaProperty>{
        __type: EType.string,
        validations: <IPropertyValidation>{
            maxLength: 200
        }
    },
    is_tiered: EType.boolean,
    allow_direct_add_to_cart: EType.boolean,
    stock: EType.number,
    disable_customization: EType.boolean,
    created_at: EType.date,
    updated_at: EType.date,
    status_id: <ISchemaProperty>{
        __type: EType.number,
        table: "company_7_salesmagics.products_product_status",
        column: "id"
    }
};

module.exports = { schema };