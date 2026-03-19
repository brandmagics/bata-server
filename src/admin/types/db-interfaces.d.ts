declare const __objectIdBrand: unique symbol;

/**
 * Nominal ObjectId type.
 *
 * The `__objectIdBrand` unique symbol makes this type incompatible with plain
 * strings, numbers, or other objects, so TypeScript will raise an error if you
 * compare an ObjectId directly with `===` against an incompatible type:
 *
 *   "This condition will always return 'false' since the types have no overlap."
 *
 * Use `.equals()` for value-equality between two ObjectId instances.
 */
interface ObjectId {
    /** Brand — prevents structural compatibility with unrelated types. */
    readonly [__objectIdBrand]: never;

    /** Returns the 24-character hex string representation. */
    toHexString(): string;

    /** Alias for `toHexString()`. */
    toString(): string;

    /** Value-equality check (safe alternative to `===`). */
    equals(other: ObjectId | string): boolean;

    /** Extracts the timestamp embedded in the ObjectId. */
    getTimestamp(): Date;

    /** Used by `JSON.stringify` — returns the hex string. */
    toJSON(): string;

    /** Makes template literals and string coercion work naturally. */
    valueOf(): string;
}

interface ObjectIdConstructor {
    new(id?: string | ObjectId): ObjectId;

    (id?: string | ObjectId): ObjectId;

    /** Returns true if the given value is a valid 24-char hex ObjectId string. */
    isValid(id: unknown): boolean;

    /** Creates an ObjectId from a Unix timestamp (seconds). */
    createFromTime(time: number): ObjectId;

    /** Creates an ObjectId from a 24-char hex string. */
    createFromHexString(hexString: string): ObjectId;
}

declare const ObjectId: ObjectIdConstructor;

export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrCustomuser {
    id?: number;
    password: string;
    last_login?: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    is_admin?: boolean;
    device_token?: string;
    device_token_expiry?: Date;
    is_module_user?: boolean;
    company_id?: number;
}
export type ICompany_7HiremagicsHrCustomuser_P = Partial<ICompany_7HiremagicsHrCustomuser>;
export type ICompany_7HiremagicsHrCustomuser_S = { [Property in keyof ICompany_7HiremagicsHrCustomuser_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrCustomuserGroups {
    id?: number;
    customuser_id: number;
    group_id: number;
}
export type ICompany_7HiremagicsHrCustomuserGroups_P = Partial<ICompany_7HiremagicsHrCustomuserGroups>;
export type ICompany_7HiremagicsHrCustomuserGroups_S = { [Property in keyof ICompany_7HiremagicsHrCustomuserGroups_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrCustomuserUserPermissions {
    id?: number;
    customuser_id: number;
    permission_id: number;
}
export type ICompany_7HiremagicsHrCustomuserUserPermissions_P = Partial<ICompany_7HiremagicsHrCustomuserUserPermissions>;
export type ICompany_7HiremagicsHrCustomuserUserPermissions_S = { [Property in keyof ICompany_7HiremagicsHrCustomuserUserPermissions_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrDepartment {
    id?: number;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7HiremagicsHrDepartment_P = Partial<ICompany_7HiremagicsHrDepartment>;
export type ICompany_7HiremagicsHrDepartment_S = { [Property in keyof ICompany_7HiremagicsHrDepartment_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrEmployee {
    id?: number;
    name: string;
    email: string;
    phone_number?: string;
    pay_scale?: string;
    pay_scale_amount?: number;
    currency: string;
    allow_multiple?: boolean;
    created_at: Date;
    updated_at: Date;
    department_id?: number;
    role_id?: number;
    company_id?: number;
}
export type ICompany_7HiremagicsHrEmployee_P = Partial<ICompany_7HiremagicsHrEmployee>;
export type ICompany_7HiremagicsHrEmployee_S = { [Property in keyof ICompany_7HiremagicsHrEmployee_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrEmployeelocation {
    id?: number;
    location?: string;
    longitude?: number;
    latitude?: number;
    street?: string;
    postal_code?: string;
    state?: string;
    city?: string;
    current_location?: string;
    timestamp?: Date;
    date?: Date;
    employee_id?: number;
}
export type ICompany_7HiremagicsHrEmployeelocation_P = Partial<ICompany_7HiremagicsHrEmployeelocation>;
export type ICompany_7HiremagicsHrEmployeelocation_S = { [Property in keyof ICompany_7HiremagicsHrEmployeelocation_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrEmployeeskill {
    id?: number;
    employee_id: number;
    skill_id: number;
}
export type ICompany_7HiremagicsHrEmployeeskill_P = Partial<ICompany_7HiremagicsHrEmployeeskill>;
export type ICompany_7HiremagicsHrEmployeeskill_S = { [Property in keyof ICompany_7HiremagicsHrEmployeeskill_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrHoliday {
    id?: number;
    date: Date;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7HiremagicsHrHoliday_P = Partial<ICompany_7HiremagicsHrHoliday>;
export type ICompany_7HiremagicsHrHoliday_S = { [Property in keyof ICompany_7HiremagicsHrHoliday_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrLeave {
    id?: number;
    date: Date;
    status: string;
    reason?: string;
    created_at: Date;
    updated_at: Date;
    employee_id: number;
}
export type ICompany_7HiremagicsHrLeave_P = Partial<ICompany_7HiremagicsHrLeave>;
export type ICompany_7HiremagicsHrLeave_S = { [Property in keyof ICompany_7HiremagicsHrLeave_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrRole {
    id?: number;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7HiremagicsHrRole_P = Partial<ICompany_7HiremagicsHrRole>;
export type ICompany_7HiremagicsHrRole_S = { [Property in keyof ICompany_7HiremagicsHrRole_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrSkill {
    id?: number;
    name: string;
}
export type ICompany_7HiremagicsHrSkill_P = Partial<ICompany_7HiremagicsHrSkill>;
export type ICompany_7HiremagicsHrSkill_S = { [Property in keyof ICompany_7HiremagicsHrSkill_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrStudent {
    id?: number;
    name: string;
    email: string;
    phone_number?: string;
    department: string;
    role: string;
}
export type ICompany_7HiremagicsHrStudent_P = Partial<ICompany_7HiremagicsHrStudent>;
export type ICompany_7HiremagicsHrStudent_S = { [Property in keyof ICompany_7HiremagicsHrStudent_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7HiremagicsHrWeekoff {
    id?: number;
    day_of_week: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7HiremagicsHrWeekoff_P = Partial<ICompany_7HiremagicsHrWeekoff>;
export type ICompany_7HiremagicsHrWeekoff_S = { [Property in keyof ICompany_7HiremagicsHrWeekoff_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsAdminAppCustomuser {
    id?: number;
    password: string;
    last_login?: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    is_admin?: boolean;
    device_token?: string;
    device_token_expiry?: Date;
    company_id?: number;
    is_module_user?: boolean;
}
export type ICompany_7LeadmagicsAdminAppCustomuser_P = Partial<ICompany_7LeadmagicsAdminAppCustomuser>;
export type ICompany_7LeadmagicsAdminAppCustomuser_S = { [Property in keyof ICompany_7LeadmagicsAdminAppCustomuser_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsAdminAppCustomuserGroups {
    id?: number;
    customuser_id: number;
    group_id: number;
}
export type ICompany_7LeadmagicsAdminAppCustomuserGroups_P = Partial<ICompany_7LeadmagicsAdminAppCustomuserGroups>;
export type ICompany_7LeadmagicsAdminAppCustomuserGroups_S = { [Property in keyof ICompany_7LeadmagicsAdminAppCustomuserGroups_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsAdminAppCustomuserUserPermissions {
    id?: number;
    customuser_id: number;
    permission_id: number;
}
export type ICompany_7LeadmagicsAdminAppCustomuserUserPermissions_P = Partial<ICompany_7LeadmagicsAdminAppCustomuserUserPermissions>;
export type ICompany_7LeadmagicsAdminAppCustomuserUserPermissions_S = { [Property in keyof ICompany_7LeadmagicsAdminAppCustomuserUserPermissions_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiClient {
    id?: number;
    client?: string;
    job_role?: string;
    phone?: string;
    email?: string;
    social_media?: string;
    status?: string;
    remarks?: string;
    lead_owner?: string;
    nurturing_stage?: string;
    created_at: Date;
    updated_at: Date;
    company_id?: number;
    salesmagics_id?: number;
    is_client?: boolean;
}
export type ICompany_7LeadmagicsApiClient_P = Partial<ICompany_7LeadmagicsApiClient>;
export type ICompany_7LeadmagicsApiClient_S = { [Property in keyof ICompany_7LeadmagicsApiClient_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiCompany {
    id?: number;
    company_name: string;
    domain?: string;
    location?: string;
    industry?: string;
    company_email?: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7LeadmagicsApiCompany_P = Partial<ICompany_7LeadmagicsApiCompany>;
export type ICompany_7LeadmagicsApiCompany_S = { [Property in keyof ICompany_7LeadmagicsApiCompany_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiEmailrecipient {
    id?: number;
    status: string;
    tracking_id: string;
    created_at: Date;
    sent_at?: Date;
    opened_at?: Date;
    clicked_at?: Date;
    unsubscribed_at?: Date;
    failed_reason?: string;
    campaign_id: number;
    contact_id: number;
}
export type ICompany_7LeadmagicsApiEmailrecipient_P = Partial<ICompany_7LeadmagicsApiEmailrecipient>;
export type ICompany_7LeadmagicsApiEmailrecipient_S = { [Property in keyof ICompany_7LeadmagicsApiEmailrecipient_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiFolder {
    id?: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    salesmagics_id?: number;
}
export type ICompany_7LeadmagicsApiFolder_P = Partial<ICompany_7LeadmagicsApiFolder>;
export type ICompany_7LeadmagicsApiFolder_S = { [Property in keyof ICompany_7LeadmagicsApiFolder_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiList {
    id?: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    folder_id?: number;
    salesmagics_id?: number;
}
export type ICompany_7LeadmagicsApiList_P = Partial<ICompany_7LeadmagicsApiList>;
export type ICompany_7LeadmagicsApiList_S = { [Property in keyof ICompany_7LeadmagicsApiList_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiListClients {
    id?: number;
    list_id: number;
    client_id: number;
}
export type ICompany_7LeadmagicsApiListClients_P = Partial<ICompany_7LeadmagicsApiListClients>;
export type ICompany_7LeadmagicsApiListClients_S = { [Property in keyof ICompany_7LeadmagicsApiListClients_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiTemplate {
    id?: number;
    name: string;
    html_content?: string;
    plain_text_content?: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    last_used?: Date;
    total_sent: number;
    last_sent_at?: Date;
    variables: string;
    thumbnail?: string;
}
export type ICompany_7LeadmagicsApiTemplate_P = Partial<ICompany_7LeadmagicsApiTemplate>;
export type ICompany_7LeadmagicsApiTemplate_S = { [Property in keyof ICompany_7LeadmagicsApiTemplate_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsApiTestmail {
    id?: number;
    emails: string;
    created_by_id: number;
    created_at: Date;
}
export type ICompany_7LeadmagicsApiTestmail_P = Partial<ICompany_7LeadmagicsApiTestmail>;
export type ICompany_7LeadmagicsApiTestmail_S = { [Property in keyof ICompany_7LeadmagicsApiTestmail_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsCampaigns {
    id?: number;
    campaign_name: string;
    campaign_type: string;
    subject_line: string;
    preview_text: string;
    custom_content?: string;
    sender_name?: string;
    sender_email?: string;
    reply_to?: string;
    custom_headers: string;
    enable_tracking: boolean;
    track_opens: boolean;
    track_clicks: boolean;
    email_format: string;
    opportunities: string;
    test_email_recipients: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    scheduled_at?: Date;
    sent_at?: Date;
    selected: boolean;
    template_variables: string;
    template_id?: number;
}
export type ICompany_7LeadmagicsCampaigns_P = Partial<ICompany_7LeadmagicsCampaigns>;
export type ICompany_7LeadmagicsCampaigns_S = { [Property in keyof ICompany_7LeadmagicsCampaigns_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsCampaignsDoNotsentLists {
    id?: number;
    emailcampaign_id: number;
    list_id: number;
}
export type ICompany_7LeadmagicsCampaignsDoNotsentLists_P = Partial<ICompany_7LeadmagicsCampaignsDoNotsentLists>;
export type ICompany_7LeadmagicsCampaignsDoNotsentLists_S = { [Property in keyof ICompany_7LeadmagicsCampaignsDoNotsentLists_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7LeadmagicsCampaignsSentLists {
    id?: number;
    emailcampaign_id: number;
    list_id: number;
}
export type ICompany_7LeadmagicsCampaignsSentLists_P = Partial<ICompany_7LeadmagicsCampaignsSentLists>;
export type ICompany_7LeadmagicsCampaignsSentLists_S = { [Property in keyof ICompany_7LeadmagicsCampaignsSentLists_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsAdminAppCustomuser {
    id?: number;
    password: string;
    last_login?: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    email?: string;
    is_admin: boolean;
    is_partner: boolean;
    is_customer: boolean;
    otp?: string;
    company_id?: number;
    is_module_user?: boolean;
}
export type ICompany_7SalesmagicsAdminAppCustomuser_P = Partial<ICompany_7SalesmagicsAdminAppCustomuser>;
export type ICompany_7SalesmagicsAdminAppCustomuser_S = { [Property in keyof ICompany_7SalesmagicsAdminAppCustomuser_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsAdminAppCustomuserGroups {
    id?: number;
    customuser_id: number;
    group_id: number;
}
export type ICompany_7SalesmagicsAdminAppCustomuserGroups_P = Partial<ICompany_7SalesmagicsAdminAppCustomuserGroups>;
export type ICompany_7SalesmagicsAdminAppCustomuserGroups_S = { [Property in keyof ICompany_7SalesmagicsAdminAppCustomuserGroups_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsAdminAppCustomuserUserPermissions {
    id?: number;
    customuser_id: number;
    permission_id: number;
}
export type ICompany_7SalesmagicsAdminAppCustomuserUserPermissions_P = Partial<ICompany_7SalesmagicsAdminAppCustomuserUserPermissions>;
export type ICompany_7SalesmagicsAdminAppCustomuserUserPermissions_S = { [Property in keyof ICompany_7SalesmagicsAdminAppCustomuserUserPermissions_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersCart {
    id?: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    higher_designer?: boolean;
    site_visit?: boolean;
    customer_id?: number;
}
export type ICompany_7SalesmagicsCustomersCart_P = Partial<ICompany_7SalesmagicsCustomersCart>;
export type ICompany_7SalesmagicsCustomersCart_S = { [Property in keyof ICompany_7SalesmagicsCustomersCart_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersCartitem {
    id?: number;
    custom_width?: number;
    custom_height?: number;
    size_unit: string;
    design_image?: string;
    quantity: number;
    price?: number;
    total_price: number;
    status: string;
    created_at: Date;
    design_description?: string;
    thickness_object_id?: number;
    delivery_object_id?: number;
    installation_object_id?: number;
    turnaround_object_id?: number;
    distance_object_id?: number;
    is_smart?: boolean;
    cart_id?: number;
    delivery_content_type_id?: number;
    distance_content_type_id?: number;
    hire_designer_id?: number;
    installation_content_type_id?: number;
    product_id?: number;
    thickness_content_type_id?: number;
    turnaround_content_type_id?: number;
}
export type ICompany_7SalesmagicsCustomersCartitem_P = Partial<ICompany_7SalesmagicsCustomersCartitem>;
export type ICompany_7SalesmagicsCustomersCartitem_S = { [Property in keyof ICompany_7SalesmagicsCustomersCartitem_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersCustomer {
    id?: number;
    mobile?: string;
    country_code?: string;
    verified_email: boolean;
    verified_mobile: boolean;
    status?: string;
    user_id?: number;
}
export type ICompany_7SalesmagicsCustomersCustomer_P = Partial<ICompany_7SalesmagicsCustomersCustomer>;
export type ICompany_7SalesmagicsCustomersCustomer_S = { [Property in keyof ICompany_7SalesmagicsCustomersCustomer_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersCustomerAddress {
    id?: number;
    company_name?: string;
    ext?: string;
    address_line1?: string;
    address_line2?: string;
    country?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    customer_id?: number;
}
export type ICompany_7SalesmagicsCustomersCustomerAddress_P = Partial<ICompany_7SalesmagicsCustomersCustomerAddress>;
export type ICompany_7SalesmagicsCustomersCustomerAddress_S = { [Property in keyof ICompany_7SalesmagicsCustomersCustomerAddress_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersOrder {
    id?: number;
    status: string;
    ordered_date: Date;
    payment_method: string;
    payment_status?: string;
    amount: number;
    delivered_date?: Date;
    transaction_id?: string;
    site_visit?: boolean;
    site_visit_fee?: number;
    vat_percentage?: number;
    vat_amount?: number;
    address_id: number;
    cart_id?: number;
    customer_id: number;
}
export type ICompany_7SalesmagicsCustomersOrder_P = Partial<ICompany_7SalesmagicsCustomersOrder>;
export type ICompany_7SalesmagicsCustomersOrder_S = { [Property in keyof ICompany_7SalesmagicsCustomersOrder_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersOtprecord {
    id?: number;
    email?: string;
    mobile?: string;
    country_code?: string;
    otp: string;
    otp_for?: string;
    email_verified: boolean;
    mobile_verified: boolean;
    created_at: Date;
    user_id?: number;
}
export type ICompany_7SalesmagicsCustomersOtprecord_P = Partial<ICompany_7SalesmagicsCustomersOtprecord>;
export type ICompany_7SalesmagicsCustomersOtprecord_S = { [Property in keyof ICompany_7SalesmagicsCustomersOtprecord_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersPartnercampaignusage {
    id?: number;
    campaign_id: number;
    campaign_name: string;
    recipient_count: number;
    opened_count: number;
    clicked_count: number;
    failed_count: number;
    sent_at: Date;
    created_at: Date;
    partner_id: number;
}
export type ICompany_7SalesmagicsCustomersPartnercampaignusage_P = Partial<ICompany_7SalesmagicsCustomersPartnercampaignusage>;
export type ICompany_7SalesmagicsCustomersPartnercampaignusage_S = { [Property in keyof ICompany_7SalesmagicsCustomersPartnercampaignusage_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsCustomersPasswordresetsession {
    id?: number;
    session_token: string;
    reset_token?: string;
    email: string;
    otp: string;
    is_verified: boolean;
    created_at: Date;
}
export type ICompany_7SalesmagicsCustomersPasswordresetsession_P = Partial<ICompany_7SalesmagicsCustomersPasswordresetsession>;
export type ICompany_7SalesmagicsCustomersPasswordresetsession_S = { [Property in keyof ICompany_7SalesmagicsCustomersPasswordresetsession_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsPartners {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    mobile_number: string;
    commission: number;
    status: string;
    last_login?: Date;
    last_active?: Date;
    date_joined: Date;
    updated_at: Date;
    user_id: number;
}
export type ICompany_7SalesmagicsPartners_P = Partial<ICompany_7SalesmagicsPartners>;
export type ICompany_7SalesmagicsPartners_S = { [Property in keyof ICompany_7SalesmagicsPartners_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsPepAppClaimwarranty {
    id?: number;
    warranty_number: string;
    description: string;
    claimed_at: Date;
    status: string;
    response?: string;
}
export type ICompany_7SalesmagicsPepAppClaimwarranty_P = Partial<ICompany_7SalesmagicsPepAppClaimwarranty>;
export type ICompany_7SalesmagicsPepAppClaimwarranty_S = { [Property in keyof ICompany_7SalesmagicsPepAppClaimwarranty_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsPepAppCustomerdesign {
    id: string;
    anonymous_uuid?: string;
    product_name?: string;
    product_min_width?: number;
    product_min_height?: number;
    product_max_width?: number;
    product_max_height?: number;
    product_price?: number;
    product_image?: string;
    width?: number;
    height?: number;
    quantity: number;
    unit: string;
    design_data: string;
    design_image_url?: string;
    created_at: Date;
    updated_at: Date;
    customer_id?: number;
    product_id?: number;
}
export type ICompany_7SalesmagicsPepAppCustomerdesign_P = Partial<ICompany_7SalesmagicsPepAppCustomerdesign>;
export type ICompany_7SalesmagicsPepAppCustomerdesign_S = { [Property in keyof ICompany_7SalesmagicsPepAppCustomerdesign_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsPepAppWarrantyPlan {
    id?: number;
    start_price_range?: number;
    end_price_range?: number;
    price_range?: string;
    year1?: number;
    year2?: number;
    year5?: number;
}
export type ICompany_7SalesmagicsPepAppWarrantyPlan_P = Partial<ICompany_7SalesmagicsPepAppWarrantyPlan>;
export type ICompany_7SalesmagicsPepAppWarrantyPlan_S = { [Property in keyof ICompany_7SalesmagicsPepAppWarrantyPlan_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsPepAppWarrantyregistration {
    id?: number;
    full_name: string;
    email: string;
    phone: string;
    invoice_number?: string;
    invoice_date: Date;
    invoice_file?: string;
    warranty_plan_amount: number;
    warranty_number?: string;
    created_at: Date;
    invoice_value_id?: number;
}
export type ICompany_7SalesmagicsPepAppWarrantyregistration_P = Partial<ICompany_7SalesmagicsPepAppWarrantyregistration>;
export type ICompany_7SalesmagicsPepAppWarrantyregistration_S = { [Property in keyof ICompany_7SalesmagicsPepAppWarrantyregistration_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsBanner {
    id?: number;
    image?: string;
    title: string;
    button_text?: string;
    cta_link?: string;
    expiry_date?: Date;
    status: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7SalesmagicsProductsBanner_P = Partial<ICompany_7SalesmagicsProductsBanner>;
export type ICompany_7SalesmagicsProductsBanner_S = { [Property in keyof ICompany_7SalesmagicsProductsBanner_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsBannerImage {
    id?: number;
    name?: string;
    image?: string;
    created_at: Date;
}
export type ICompany_7SalesmagicsProductsBannerImage_P = Partial<ICompany_7SalesmagicsProductsBannerImage>;
export type ICompany_7SalesmagicsProductsBannerImage_S = { [Property in keyof ICompany_7SalesmagicsProductsBannerImage_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsCategory {
    id?: number;
    type: string;
    category_name?: string;
    description?: string;
    category_image?: string;
}
export type ICompany_7SalesmagicsProductsCategory_P = Partial<ICompany_7SalesmagicsProductsCategory>;
export type ICompany_7SalesmagicsProductsCategory_S = { [Property in keyof ICompany_7SalesmagicsProductsCategory_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsCategoryParentCategories {
    id?: number;
    category_id: number;
    parentcategory_id: number;
}
export type ICompany_7SalesmagicsProductsCategoryParentCategories_P = Partial<ICompany_7SalesmagicsProductsCategoryParentCategories>;
export type ICompany_7SalesmagicsProductsCategoryParentCategories_S = { [Property in keyof ICompany_7SalesmagicsProductsCategoryParentCategories_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsDelivery {
    id?: number;
    name: string;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsDelivery_P = Partial<ICompany_7SalesmagicsProductsDelivery>;
export type ICompany_7SalesmagicsProductsDelivery_S = { [Property in keyof ICompany_7SalesmagicsProductsDelivery_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsDesignerRate {
    id?: number;
    rate_type: string;
    hours?: number;
    amount?: number;
}
export type ICompany_7SalesmagicsProductsDesignerRate_P = Partial<ICompany_7SalesmagicsProductsDesignerRate>;
export type ICompany_7SalesmagicsProductsDesignerRate_S = { [Property in keyof ICompany_7SalesmagicsProductsDesignerRate_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsDistance {
    id?: number;
    km: string;
    unit: string;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsDistance_P = Partial<ICompany_7SalesmagicsProductsDistance>;
export type ICompany_7SalesmagicsProductsDistance_S = { [Property in keyof ICompany_7SalesmagicsProductsDistance_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsGlobaldelivery {
    id?: number;
    name: string;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    is_active: boolean;
}
export type ICompany_7SalesmagicsProductsGlobaldelivery_P = Partial<ICompany_7SalesmagicsProductsGlobaldelivery>;
export type ICompany_7SalesmagicsProductsGlobaldelivery_S = { [Property in keyof ICompany_7SalesmagicsProductsGlobaldelivery_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsGlobaldistance {
    id?: number;
    km: string;
    unit: string;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    is_active: boolean;
}
export type ICompany_7SalesmagicsProductsGlobaldistance_P = Partial<ICompany_7SalesmagicsProductsGlobaldistance>;
export type ICompany_7SalesmagicsProductsGlobaldistance_S = { [Property in keyof ICompany_7SalesmagicsProductsGlobaldistance_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsGlobalinstallationtype {
    id?: number;
    name: string;
    days: number;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    is_active: boolean;
}
export type ICompany_7SalesmagicsProductsGlobalinstallationtype_P = Partial<ICompany_7SalesmagicsProductsGlobalinstallationtype>;
export type ICompany_7SalesmagicsProductsGlobalinstallationtype_S = { [Property in keyof ICompany_7SalesmagicsProductsGlobalinstallationtype_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsGlobalthickness {
    id?: number;
    size: string;
    price_percentage?: number;
    price: number;
    is_active: boolean;
}
export type ICompany_7SalesmagicsProductsGlobalthickness_P = Partial<ICompany_7SalesmagicsProductsGlobalthickness>;
export type ICompany_7SalesmagicsProductsGlobalthickness_S = { [Property in keyof ICompany_7SalesmagicsProductsGlobalthickness_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsGlobalturnaroundtime {
    id?: number;
    name: string;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    is_active: boolean;
}
export type ICompany_7SalesmagicsProductsGlobalturnaroundtime_P = Partial<ICompany_7SalesmagicsProductsGlobalturnaroundtime>;
export type ICompany_7SalesmagicsProductsGlobalturnaroundtime_S = { [Property in keyof ICompany_7SalesmagicsProductsGlobalturnaroundtime_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsHigherDesigner {
    id?: number;
    designer_rate?: number;
}
export type ICompany_7SalesmagicsProductsHigherDesigner_P = Partial<ICompany_7SalesmagicsProductsHigherDesigner>;
export type ICompany_7SalesmagicsProductsHigherDesigner_S = { [Property in keyof ICompany_7SalesmagicsProductsHigherDesigner_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsInstallationtype {
    id?: number;
    name: string;
    days: number;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsInstallationtype_P = Partial<ICompany_7SalesmagicsProductsInstallationtype>;
export type ICompany_7SalesmagicsProductsInstallationtype_S = { [Property in keyof ICompany_7SalesmagicsProductsInstallationtype_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsInventorystock {
    id?: number;
    current_stock: number;
    low_stock_threshold: number;
    last_restocked: Date;
    created_at: Date;
    total_restocked: number;
    total_sold: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsInventorystock_P = Partial<ICompany_7SalesmagicsProductsInventorystock>;
export type ICompany_7SalesmagicsProductsInventorystock_S = { [Property in keyof ICompany_7SalesmagicsProductsInventorystock_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsParentcategory {
    id?: number;
    type: string;
    name?: string;
    description?: string;
    image?: string;
}
export type ICompany_7SalesmagicsProductsParentcategory_P = Partial<ICompany_7SalesmagicsProductsParentcategory>;
export type ICompany_7SalesmagicsProductsParentcategory_S = { [Property in keyof ICompany_7SalesmagicsProductsParentcategory_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsProduct {
    id?: number;
    type: string;
    name?: string;
    alternate_names?: string;
    description?: string;
    product_overview?: string;
    product_specifications?: string;
    installation?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    min_width?: number;
    min_height?: number;
    max_width?: number;
    max_height?: number;
    size?: string;
    price?: number;
    fixed_price?: number;
    amazon_url?: string;
    is_tiered?: boolean;
    allow_direct_add_to_cart?: boolean;
    stock?: number;
    disable_customization?: boolean;
    created_at?: Date;
    updated_at?: Date;
    status_id?: number;
}
export type ICompany_7SalesmagicsProductsProduct_P = Partial<ICompany_7SalesmagicsProductsProduct>;
export type ICompany_7SalesmagicsProductsProduct_S = { [Property in keyof ICompany_7SalesmagicsProductsProduct_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsProductCategories {
    id?: number;
    product_id: number;
    category_id: number;
}
export type ICompany_7SalesmagicsProductsProductCategories_P = Partial<ICompany_7SalesmagicsProductsProductCategories>;
export type ICompany_7SalesmagicsProductsProductCategories_S = { [Property in keyof ICompany_7SalesmagicsProductsProductCategories_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsProductOfferSlider {
    id?: number;
    offer_details?: string;
    date: Date;
}
export type ICompany_7SalesmagicsProductsProductOfferSlider_P = Partial<ICompany_7SalesmagicsProductsProductOfferSlider>;
export type ICompany_7SalesmagicsProductsProductOfferSlider_S = { [Property in keyof ICompany_7SalesmagicsProductsProductOfferSlider_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsProductStatus {
    id?: number;
    status?: string;
    created_at: Date;
}
export type ICompany_7SalesmagicsProductsProductStatus_P = Partial<ICompany_7SalesmagicsProductsProductStatus>;
export type ICompany_7SalesmagicsProductsProductStatus_S = { [Property in keyof ICompany_7SalesmagicsProductsProductStatus_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsProducttier {
    id?: number;
    tier_level: number;
    start_quantity: number;
    end_quantity: number;
    price: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsProducttier_P = Partial<ICompany_7SalesmagicsProductsProducttier>;
export type ICompany_7SalesmagicsProductsProducttier_S = { [Property in keyof ICompany_7SalesmagicsProductsProducttier_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsSiteVisit {
    id?: number;
    amount?: number;
    created_at: Date;
}
export type ICompany_7SalesmagicsProductsSiteVisit_P = Partial<ICompany_7SalesmagicsProductsSiteVisit>;
export type ICompany_7SalesmagicsProductsSiteVisit_S = { [Property in keyof ICompany_7SalesmagicsProductsSiteVisit_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsStandardSizes {
    id?: number;
    standard_sizes?: string;
    width?: number;
    height?: number;
    unit: string;
    product_id?: number;
}
export type ICompany_7SalesmagicsProductsStandardSizes_P = Partial<ICompany_7SalesmagicsProductsStandardSizes>;
export type ICompany_7SalesmagicsProductsStandardSizes_S = { [Property in keyof ICompany_7SalesmagicsProductsStandardSizes_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsTestimonials {
    id?: number;
    name?: string;
    occupation?: string;
    image?: string;
    description?: string;
    rating?: number;
    created_at: Date;
}
export type ICompany_7SalesmagicsProductsTestimonials_P = Partial<ICompany_7SalesmagicsProductsTestimonials>;
export type ICompany_7SalesmagicsProductsTestimonials_S = { [Property in keyof ICompany_7SalesmagicsProductsTestimonials_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsThickness {
    id?: number;
    description?: string;
    size: string;
    price_percentage?: number;
    price: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsThickness_P = Partial<ICompany_7SalesmagicsProductsThickness>;
export type ICompany_7SalesmagicsProductsThickness_S = { [Property in keyof ICompany_7SalesmagicsProductsThickness_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsTurnaroundtime {
    id?: number;
    name: string;
    description?: string;
    price_percentage?: number;
    price_decimal?: number;
    product_id: number;
}
export type ICompany_7SalesmagicsProductsTurnaroundtime_P = Partial<ICompany_7SalesmagicsProductsTurnaroundtime>;
export type ICompany_7SalesmagicsProductsTurnaroundtime_S = { [Property in keyof ICompany_7SalesmagicsProductsTurnaroundtime_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsVat {
    id?: number;
    percentage: number;
    is_inclusive: boolean;
}
export type ICompany_7SalesmagicsProductsVat_P = Partial<ICompany_7SalesmagicsProductsVat>;
export type ICompany_7SalesmagicsProductsVat_S = { [Property in keyof ICompany_7SalesmagicsProductsVat_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsProductsWarrantyPlan {
    id?: number;
    start_price_range?: number;
    end_price_range?: number;
    price_range?: string;
    year1?: number;
    year2?: number;
    year5?: number;
}
export type ICompany_7SalesmagicsProductsWarrantyPlan_P = Partial<ICompany_7SalesmagicsProductsWarrantyPlan>;
export type ICompany_7SalesmagicsProductsWarrantyPlan_S = { [Property in keyof ICompany_7SalesmagicsProductsWarrantyPlan_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsRequestedEmailUsers {
    id?: number;
    name: string;
    email: string;
    mobile?: string;
    company?: string;
    status: string;
    type: string;
    created_at: Date;
    updated_at: Date;
    user_id?: number;
    total_amount: number;
}
export type ICompany_7SalesmagicsRequestedEmailUsers_P = Partial<ICompany_7SalesmagicsRequestedEmailUsers>;
export type ICompany_7SalesmagicsRequestedEmailUsers_S = { [Property in keyof ICompany_7SalesmagicsRequestedEmailUsers_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsRfqItems {
    id?: number;
    product_name: string;
    size?: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    specifications?: string;
    rfq_user_id: number;
}
export type ICompany_7SalesmagicsRfqItems_P = Partial<ICompany_7SalesmagicsRfqItems>;
export type ICompany_7SalesmagicsRfqItems_S = { [Property in keyof ICompany_7SalesmagicsRfqItems_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7SalesmagicsRfqServices {
    id?: number;
    service_type: string;
    service_name: string;
    service_description?: string;
    fee?: number;
    product_name?: string;
    additional_info?: string;
    rfq_user_id: number;
}
export type ICompany_7SalesmagicsRfqServices_P = Partial<ICompany_7SalesmagicsRfqServices>;
export type ICompany_7SalesmagicsRfqServices_S = { [Property in keyof ICompany_7SalesmagicsRfqServices_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsLocationChecklistactivity {
    id?: number;
    action: string;
    description?: string;
    timestamp: Date;
    checklist_id: number;
    checklist_task_id?: number;
    task_instance_id?: number;
    user_id?: number;
}
export type ICompany_7TaskmagicsLocationChecklistactivity_P = Partial<ICompany_7TaskmagicsLocationChecklistactivity>;
export type ICompany_7TaskmagicsLocationChecklistactivity_S = { [Property in keyof ICompany_7TaskmagicsLocationChecklistactivity_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsLocationUserdashboardpreference {
    id?: number;
    selected_metrics: string;
    updated_at: Date;
    user_id: number;
}
export type ICompany_7TaskmagicsLocationUserdashboardpreference_P = Partial<ICompany_7TaskmagicsLocationUserdashboardpreference>;
export type ICompany_7TaskmagicsLocationUserdashboardpreference_S = { [Property in keyof ICompany_7TaskmagicsLocationUserdashboardpreference_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsPersonalChatPersonalchat {
    id?: number;
    employee_id: number;
    created_at: Date;
    admin_id: number;
}
export type ICompany_7TaskmagicsPersonalChatPersonalchat_P = Partial<ICompany_7TaskmagicsPersonalChatPersonalchat>;
export type ICompany_7TaskmagicsPersonalChatPersonalchat_S = { [Property in keyof ICompany_7TaskmagicsPersonalChatPersonalchat_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsPersonalChatPersonalmessage {
    id?: number;
    message?: string;
    file_url?: string;
    file_name?: string;
    file_type?: string;
    sent_at: Date;
    updated_at: Date;
    is_edited: boolean;
    chat_id: number;
    sender_id: number;
}
export type ICompany_7TaskmagicsPersonalChatPersonalmessage_P = Partial<ICompany_7TaskmagicsPersonalChatPersonalmessage>;
export type ICompany_7TaskmagicsPersonalChatPersonalmessage_S = { [Property in keyof ICompany_7TaskmagicsPersonalChatPersonalmessage_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsPersonalChatReadmessage {
    id?: number;
    read_at: Date;
    message_id: number;
    user_id: number;
}
export type ICompany_7TaskmagicsPersonalChatReadmessage_P = Partial<ICompany_7TaskmagicsPersonalChatReadmessage>;
export type ICompany_7TaskmagicsPersonalChatReadmessage_S = { [Property in keyof ICompany_7TaskmagicsPersonalChatReadmessage_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppChecklist {
    id?: number;
    name: string;
    department: string;
    department_id: string;
    description?: string;
    frequency: string;
    day_of_month?: string;
    run_on_date?: Date;
    active_days: string;
    time_of_day: Date;
    smart_skip: boolean;
    manual_trigger: boolean;
    custom_schedule?: string;
    assigned_role_id: string;
    assigned_employee_ids: string;
    created_at: Date;
    updated_at: Date;
    created_by_id?: number;
    template_id?: number;
    escalation_duration?: string;
}
export type ICompany_7TaskmagicsProjectTemplateAppChecklist_P = Partial<ICompany_7TaskmagicsProjectTemplateAppChecklist>;
export type ICompany_7TaskmagicsProjectTemplateAppChecklist_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppChecklist_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppChecklisttask {
    id?: number;
    title: string;
    description?: string;
    priority: string;
    task_active_days?: string;
    run_on_date?: Date;
    task_day_of_month?: string;
    assigned_role_id?: string;
    assigned_employee_ids: string;
    frequency?: string;
    custom_schedule?: string;
    allow_notes: boolean;
    allow_file_attachment: boolean;
    created_at: Date;
    updated_at: Date;
    checklist_id: number;
    created_by_id?: number;
    department_id?: string;
    estimated_duration?: string;
}
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttask_P = Partial<ICompany_7TaskmagicsProjectTemplateAppChecklisttask>;
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttask_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppChecklisttask_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppChecklisttaskdependency {
    id?: number;
    checklist_task_id: number;
    prerequisite_id: number;
}
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttaskdependency_P = Partial<ICompany_7TaskmagicsProjectTemplateAppChecklisttaskdependency>;
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttaskdependency_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppChecklisttaskdependency_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppChecklisttemplate {
    id?: number;
    name: string;
    description?: string;
    department: string;
    frequency: string;
    day_of_month?: string;
    run_on_date?: Date;
    active_days?: string;
    time_of_day?: Date;
    smart_skip: boolean;
    manual_trigger: boolean;
    custom_schedule?: string;
    assigned_role_id: string;
    assigned_employee_ids: string;
    created_at: Date;
    updated_at: Date;
    created_by_id?: number;
    escalation_duration?: string;
    department_id: string;
}
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttemplate_P = Partial<ICompany_7TaskmagicsProjectTemplateAppChecklisttemplate>;
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttemplate_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppChecklisttemplate_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetask {
    id?: number;
    title: string;
    description?: string;
    estimated_duration?: string;
    priority: string;
    task_active_days?: string;
    run_on_date?: Date;
    task_day_of_month?: string;
    allow_notes: boolean;
    allow_file_attachment: boolean;
    frequency?: string;
    custom_schedule?: string;
    created_at: Date;
    updated_at: Date;
    created_by_id?: number;
    template_id: number;
    assigned_role_id: string;
    department_id: string;
}
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetask_P = Partial<ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetask>;
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetask_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetask_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetaskdependency {
    id?: number;
    checklist_template_task_id: number;
    prerequisite_id: number;
}
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetaskdependency_P = Partial<ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetaskdependency>;
export type ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetaskdependency_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppChecklisttemplatetaskdependency_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppCustomreport {
    id?: number;
    name: string;
    selected_fields: string;
    created_at: Date;
    updated_at: Date;
    created_by_id?: number;
}
export type ICompany_7TaskmagicsProjectTemplateAppCustomreport_P = Partial<ICompany_7TaskmagicsProjectTemplateAppCustomreport>;
export type ICompany_7TaskmagicsProjectTemplateAppCustomreport_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppCustomreport_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectTemplateAppRecurringtaskinstance {
    id?: number;
    assigned_to_id: number;
    assigned_time: Date;
    status: string;
    is_overdue: boolean;
    start_time?: Date;
    pause_time?: Date;
    resume_time?: Date;
    completed_time?: Date;
    admin_verified: boolean;
    notes?: string;
    file_attachment?: string;
    created_at: Date;
    updated_at: Date;
    checklist_task_id: number;
}
export type ICompany_7TaskmagicsProjectTemplateAppRecurringtaskinstance_P = Partial<ICompany_7TaskmagicsProjectTemplateAppRecurringtaskinstance>;
export type ICompany_7TaskmagicsProjectTemplateAppRecurringtaskinstance_S = { [Property in keyof ICompany_7TaskmagicsProjectTemplateAppRecurringtaskinstance_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectChatProjectchat {
    id?: number;
    created_at: Date;
    project_id: number;
}
export type ICompany_7TaskmagicsProjectChatProjectchat_P = Partial<ICompany_7TaskmagicsProjectChatProjectchat>;
export type ICompany_7TaskmagicsProjectChatProjectchat_S = { [Property in keyof ICompany_7TaskmagicsProjectChatProjectchat_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectChatProjectmessage {
    id?: number;
    sender: number;
    message?: string;
    file_url?: string;
    file_name?: string;
    file_type?: string;
    sent_at: Date;
    chat_id: number;
    sender_type: string;
}
export type ICompany_7TaskmagicsProjectChatProjectmessage_P = Partial<ICompany_7TaskmagicsProjectChatProjectmessage>;
export type ICompany_7TaskmagicsProjectChatProjectmessage_S = { [Property in keyof ICompany_7TaskmagicsProjectChatProjectmessage_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsProjectChatProjectmessagereadstatus {
    id?: number;
    user: number;
    read_at: Date;
    message_id: number;
}
export type ICompany_7TaskmagicsProjectChatProjectmessagereadstatus_P = Partial<ICompany_7TaskmagicsProjectChatProjectmessagereadstatus>;
export type ICompany_7TaskmagicsProjectChatProjectmessagereadstatus_S = { [Property in keyof ICompany_7TaskmagicsProjectChatProjectmessagereadstatus_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsTeamChatTeamchat {
    id?: number;
    name: string;
    created_by_employee_id: number;
    member_employee_ids: string;
    created_at: Date;
}
export type ICompany_7TaskmagicsTeamChatTeamchat_P = Partial<ICompany_7TaskmagicsTeamChatTeamchat>;
export type ICompany_7TaskmagicsTeamChatTeamchat_S = { [Property in keyof ICompany_7TaskmagicsTeamChatTeamchat_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsTeamChatTeammessage {
    id?: number;
    sender_employee_id: number;
    message?: string;
    file_url?: string;
    file_name?: string;
    file_type?: string;
    sent_at: Date;
    chat_id: number;
}
export type ICompany_7TaskmagicsTeamChatTeammessage_P = Partial<ICompany_7TaskmagicsTeamChatTeammessage>;
export type ICompany_7TaskmagicsTeamChatTeammessage_S = { [Property in keyof ICompany_7TaskmagicsTeamChatTeammessage_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsTeamChatTeammessagereadstatus {
    id?: number;
    employee_id: number;
    last_read_at: Date;
    updated_at: Date;
    chat_id: number;
}
export type ICompany_7TaskmagicsTeamChatTeammessagereadstatus_P = Partial<ICompany_7TaskmagicsTeamChatTeammessagereadstatus>;
export type ICompany_7TaskmagicsTeamChatTeammessagereadstatus_S = { [Property in keyof ICompany_7TaskmagicsTeamChatTeammessagereadstatus_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsAccountsCustomuser {
    id?: number;
    password: string;
    last_login?: Date;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: Date;
    is_admin?: boolean;
    device_token?: string;
    device_token_expiry?: Date;
    employee_id?: number;
    company_id?: number;
    is_module_user?: boolean;
}
export type ICompany_7TaskmagicsAccountsCustomuser_P = Partial<ICompany_7TaskmagicsAccountsCustomuser>;
export type ICompany_7TaskmagicsAccountsCustomuser_S = { [Property in keyof ICompany_7TaskmagicsAccountsCustomuser_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsAccountsCustomuserGroups {
    id?: number;
    customuser_id: number;
    group_id: number;
}
export type ICompany_7TaskmagicsAccountsCustomuserGroups_P = Partial<ICompany_7TaskmagicsAccountsCustomuserGroups>;
export type ICompany_7TaskmagicsAccountsCustomuserGroups_S = { [Property in keyof ICompany_7TaskmagicsAccountsCustomuserGroups_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsAccountsCustomuserUserPermissions {
    id?: number;
    customuser_id: number;
    permission_id: number;
}
export type ICompany_7TaskmagicsAccountsCustomuserUserPermissions_P = Partial<ICompany_7TaskmagicsAccountsCustomuserUserPermissions>;
export type ICompany_7TaskmagicsAccountsCustomuserUserPermissions_S = { [Property in keyof ICompany_7TaskmagicsAccountsCustomuserUserPermissions_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppCategory {
    id?: number;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7TaskmagicsEmployeeAppCategory_P = Partial<ICompany_7TaskmagicsEmployeeAppCategory>;
export type ICompany_7TaskmagicsEmployeeAppCategory_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppCategory_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppEmployeeactivity {
    id?: number;
    employee_id: number;
    activity?: string;
    current_location: string;
    current_longitude?: number;
    current_latitude?: number;
    current_time: Date;
    current_date: Date;
    state?: string;
    city?: string;
    street?: string;
    country?: string;
    postal_code?: string;
    timestamp: Date;
}
export type ICompany_7TaskmagicsEmployeeAppEmployeeactivity_P = Partial<ICompany_7TaskmagicsEmployeeAppEmployeeactivity>;
export type ICompany_7TaskmagicsEmployeeAppEmployeeactivity_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppEmployeeactivity_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppEmployeeauth {
    id?: number;
    employee_id: number;
    password: string;
    created_at: Date;
    updated_at: Date;
}
export type ICompany_7TaskmagicsEmployeeAppEmployeeauth_P = Partial<ICompany_7TaskmagicsEmployeeAppEmployeeauth>;
export type ICompany_7TaskmagicsEmployeeAppEmployeeauth_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppEmployeeauth_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppEmployeelocation {
    id?: number;
    employee_id: number;
    location?: string;
    longitude?: number;
    latitude?: number;
    street?: string;
    postal_code?: string;
    state?: string;
    city?: string;
    current_location?: string;
    timestamp?: Date;
    date?: Date;
}
export type ICompany_7TaskmagicsEmployeeAppEmployeelocation_P = Partial<ICompany_7TaskmagicsEmployeeAppEmployeelocation>;
export type ICompany_7TaskmagicsEmployeeAppEmployeelocation_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppEmployeelocation_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppEmployeeuser {
    id?: number;
    employee_id: number;
    created_at: Date;
    user_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppEmployeeuser_P = Partial<ICompany_7TaskmagicsEmployeeAppEmployeeuser>;
export type ICompany_7TaskmagicsEmployeeAppEmployeeuser_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppEmployeeuser_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppPasswordresettoken {
    id?: number;
    email: string;
    token: string;
    created_at: Date;
}
export type ICompany_7TaskmagicsEmployeeAppPasswordresettoken_P = Partial<ICompany_7TaskmagicsEmployeeAppPasswordresettoken>;
export type ICompany_7TaskmagicsEmployeeAppPasswordresettoken_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppPasswordresettoken_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProject {
    id?: number;
    name: string;
    description?: string;
    start_date?: Date;
    end_date?: Date;
    assigned_all: boolean;
    assigned_employee_ids: string;
    project_value?: number;
    priority: string;
    progress: number;
    auto_assign: boolean;
    created_at: Date;
    updated_at: Date;
    created_by_id?: number;
    template_id?: number;
    end_date_mode: string;
    admin_completion_status: boolean;
    project_requirements?: string;
}
export type ICompany_7TaskmagicsEmployeeAppProject_P = Partial<ICompany_7TaskmagicsEmployeeAppProject>;
export type ICompany_7TaskmagicsEmployeeAppProject_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProject_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjectCategories {
    id?: number;
    project_id: number;
    category_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjectCategories_P = Partial<ICompany_7TaskmagicsEmployeeAppProjectCategories>;
export type ICompany_7TaskmagicsEmployeeAppProjectCategories_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjectCategories_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjectactivity {
    id?: number;
    activity_type: string;
    description: string;
    created_at: Date;
    created_by_id?: number;
    project_id: number;
    task_id?: number;
    task_comment_id?: number;
    timesheet_entry_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjectactivity_P = Partial<ICompany_7TaskmagicsEmployeeAppProjectactivity>;
export type ICompany_7TaskmagicsEmployeeAppProjectactivity_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjectactivity_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjectattachment {
    id?: number;
    file_name: string;
    file_url?: string;
    uploaded_at: Date;
    file_size?: number;
    file_type: string;
    public_id: string;
    upload_status: string;
    project_id: number;
    uploaded_by_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjectattachment_P = Partial<ICompany_7TaskmagicsEmployeeAppProjectattachment>;
export type ICompany_7TaskmagicsEmployeeAppProjectattachment_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjectattachment_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjecttemplate {
    id?: number;
    name: string;
    type: string;
    project_name: string;
    description?: string;
    skill_ids: string;
    assigned_all: boolean;
    priority: string;
    project_value?: number;
    auto_assign: boolean;
    created_at: Date;
    created_by_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjecttemplate_P = Partial<ICompany_7TaskmagicsEmployeeAppProjecttemplate>;
export type ICompany_7TaskmagicsEmployeeAppProjecttemplate_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjecttemplate_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjecttemplateCategories {
    id?: number;
    projecttemplate_id: number;
    category_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjecttemplateCategories_P = Partial<ICompany_7TaskmagicsEmployeeAppProjecttemplateCategories>;
export type ICompany_7TaskmagicsEmployeeAppProjecttemplateCategories_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjecttemplateCategories_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjecttemplatetask {
    id?: number;
    title: string;
    description?: string;
    skills_required: string;
    due_date?: Date;
    priority: string;
    status: string;
    order_index?: number;
    created_at: Date;
    updated_at: Date;
    completion_percentage: number;
    allow_notes: boolean;
    allow_file_attachment: boolean;
    base_days?: number;
    created_by_id?: number;
    template_id: number;
    parent_task_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjecttemplatetask_P = Partial<ICompany_7TaskmagicsEmployeeAppProjecttemplatetask>;
export type ICompany_7TaskmagicsEmployeeAppProjecttemplatetask_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjecttemplatetask_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppProjecttemplatetaskDependencies {
    id?: number;
    from_projecttemplatetask_id: number;
    to_projecttemplatetask_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppProjecttemplatetaskDependencies_P = Partial<ICompany_7TaskmagicsEmployeeAppProjecttemplatetaskDependencies>;
export type ICompany_7TaskmagicsEmployeeAppProjecttemplatetaskDependencies_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppProjecttemplatetaskDependencies_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppTask {
    id?: number;
    title: string;
    description?: string;
    skill_ids: string;
    assigned_employee_ids: string;
    priority: string;
    status: string;
    due_date?: Date;
    due_time?: Date;
    is_overdue: boolean;
    created_at: Date;
    updated_at: Date;
    completion_percentage: number;
    estimated_hours: number;
    allow_notes: boolean;
    allow_file_attachment: boolean;
    base_days?: number;
    created_by_id?: number;
    parent_task_id?: number;
    project_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppTask_P = Partial<ICompany_7TaskmagicsEmployeeAppTask>;
export type ICompany_7TaskmagicsEmployeeAppTask_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppTask_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppTaskAssignment {
    id?: number;
    employee_id: number;
    assigned_date?: Date;
    due_date?: Date;
    priority: string;
    status: string;
    is_overdue: boolean;
    assignment_reason?: string;
    task_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppTaskAssignment_P = Partial<ICompany_7TaskmagicsEmployeeAppTaskAssignment>;
export type ICompany_7TaskmagicsEmployeeAppTaskAssignment_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppTaskAssignment_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppTaskcomment {
    id?: number;
    object_id?: number;
    comment: string;
    created_at: Date;
    content_type_id?: number;
    parent_comment_id?: number;
    receiver_id?: number;
    sender_id?: number;
    task_assignment_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppTaskcomment_P = Partial<ICompany_7TaskmagicsEmployeeAppTaskcomment>;
export type ICompany_7TaskmagicsEmployeeAppTaskcomment_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppTaskcomment_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppTaskcommentattachment {
    id?: number;
    file?: string;
    file_url?: string;
    file_type: string;
    original_filename?: string;
    created_at: Date;
    task_comment_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppTaskcommentattachment_P = Partial<ICompany_7TaskmagicsEmployeeAppTaskcommentattachment>;
export type ICompany_7TaskmagicsEmployeeAppTaskcommentattachment_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppTaskcommentattachment_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppTaskdependency {
    id?: number;
    dependency_type?: string;
    from_task_id: number;
    to_task_id: number;
}
export type ICompany_7TaskmagicsEmployeeAppTaskdependency_P = Partial<ICompany_7TaskmagicsEmployeeAppTaskdependency>;
export type ICompany_7TaskmagicsEmployeeAppTaskdependency_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppTaskdependency_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface ICompany_7TaskmagicsEmployeeAppTimesheetentry {
    id?: number;
    employee_id: number;
    start_timestamp?: Date;
    end_timestamp?: Date;
    task_start_time?: Date;
    start_location: string;
    start_latitude?: number;
    start_longitude?: number;
    end_location?: string;
    end_latitude?: number;
    end_longitude?: number;
    description: string;
    elapsed_seconds?: number;
    previous_elapsed_seconds?: number;
    hours_worked_hms?: string;
    status: string;
    hours_worked?: number;
    notes?: string;
    file_attachment?: string;
    created_at: Date;
    checklist_task_instance_id?: number;
    project_id?: number;
    task_id?: number;
    task_assignment_id?: number;
}
export type ICompany_7TaskmagicsEmployeeAppTimesheetentry_P = Partial<ICompany_7TaskmagicsEmployeeAppTimesheetentry>;
export type ICompany_7TaskmagicsEmployeeAppTimesheetentry_S = { [Property in keyof ICompany_7TaskmagicsEmployeeAppTimesheetentry_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicBrands {
    id?: number;
    company_id: number;
    name?: string;
    color?: string;
    logo_url?: string;
}
export type IPublicBrands_P = Partial<IPublicBrands>;
export type IPublicBrands_S = { [Property in keyof IPublicBrands_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicCalendarCategories {
    id?: number;
    name: string;
    workspace_id?: number;
    created_by: number;
    created_at?: Date;
}
export type IPublicCalendarCategories_P = Partial<IPublicCalendarCategories>;
export type IPublicCalendarCategories_S = { [Property in keyof IPublicCalendarCategories_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicCalendarEventDates {
    id?: number;
    event_id: number;
    event_date: Date;
    start_time?: Date;
    end_time?: Date;
    is_completed?: boolean;
    created_at?: Date;
}
export type IPublicCalendarEventDates_P = Partial<IPublicCalendarEventDates>;
export type IPublicCalendarEventDates_S = { [Property in keyof IPublicCalendarEventDates_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicCalendarEvents {
    id?: number;
    title: string;
    event_type_id: number;
    category_id?: number;
    workspace_id?: number;
    is_all_day?: boolean;
    created_by: number;
    created_at?: Date;
    updated_at?: Date;
}
export type IPublicCalendarEvents_P = Partial<IPublicCalendarEvents>;
export type IPublicCalendarEvents_S = { [Property in keyof IPublicCalendarEvents_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicCompanies {
    id?: number;
    owner_id?: number;
    name: string;
    address?: string;
    ctype?: string;
    phone?: string;
    timezone_id?: number;
    restricted_modules?: string;
    website_link?: string;
    zip_code?: string;
    country?: string;
    created_at?: Date;
}
export type IPublicCompanies_P = Partial<IPublicCompanies>;
export type IPublicCompanies_S = { [Property in keyof IPublicCompanies_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicCompanyModules {
    id: string;
    brand_id: string;
    module_id: string;
    is_active?: boolean;
    created_at?: Date;
}
export type IPublicCompanyModules_P = Partial<IPublicCompanyModules>;
export type IPublicCompanyModules_S = { [Property in keyof IPublicCompanyModules_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicDbConfigs {
    id?: number;
    company_id: number;
    host: string;
    port: number;
    name: string;
    db_user: string;
    password: string;
}
export type IPublicDbConfigs_P = Partial<IPublicDbConfigs>;
export type IPublicDbConfigs_S = { [Property in keyof IPublicDbConfigs_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicEmailConfig {
    id?: number;
    configuration_name: string;
    email_engine: string;
    username: string;
    password: string;
    smtp_host: string;
    port: number;
    from_email: string;
    use_tls?: boolean;
    use_ssl?: boolean;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
}
export type IPublicEmailConfig_P = Partial<IPublicEmailConfig>;
export type IPublicEmailConfig_S = { [Property in keyof IPublicEmailConfig_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicEntities {
    id: string;
    brand_id?: string;
    name: string;
    reg_number?: string;
    country?: string;
    address?: string;
}
export type IPublicEntities_P = Partial<IPublicEntities>;
export type IPublicEntities_S = { [Property in keyof IPublicEntities_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicEventTypes {
    id?: number;
    name: string;
    slug: string;
}
export type IPublicEventTypes_P = Partial<IPublicEventTypes>;
export type IPublicEventTypes_S = { [Property in keyof IPublicEventTypes_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicIdentityMappings {
    id: string;
    identity_id?: string;
    brand_id?: string;
    entity_id?: string;
    unit_id?: string;
}
export type IPublicIdentityMappings_P = Partial<IPublicIdentityMappings>;
export type IPublicIdentityMappings_S = { [Property in keyof IPublicIdentityMappings_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicIdentityRoles {
    id: string;
    identity_id?: string;
    role_id?: string;
}
export type IPublicIdentityRoles_P = Partial<IPublicIdentityRoles>;
export type IPublicIdentityRoles_S = { [Property in keyof IPublicIdentityRoles_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicModules {
    id: string;
    name: string;
    base_url?: string;
    slug: string;
}
export type IPublicModules_P = Partial<IPublicModules>;
export type IPublicModules_S = { [Property in keyof IPublicModules_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicRoleModulePermissions {
    id: string;
    role_id?: string;
    module_id?: string;
    access_level?: string;
}
export type IPublicRoleModulePermissions_P = Partial<IPublicRoleModulePermissions>;
export type IPublicRoleModulePermissions_S = { [Property in keyof IPublicRoleModulePermissions_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicRoleScopeEntities {
    role_id: string;
    entity_id: string;
}
export type IPublicRoleScopeEntities_P = Partial<IPublicRoleScopeEntities>;
export type IPublicRoleScopeEntities_S = { [Property in keyof IPublicRoleScopeEntities_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicRoleScopeUnits {
    role_id: string;
    unit_id: string;
}
export type IPublicRoleScopeUnits_P = Partial<IPublicRoleScopeUnits>;
export type IPublicRoleScopeUnits_S = { [Property in keyof IPublicRoleScopeUnits_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicTimeZones {
    id?: number;
    code: string;
    name: string;
    utc_offset: string;
    is_active?: boolean;
}
export type IPublicTimeZones_P = Partial<IPublicTimeZones>;
export type IPublicTimeZones_S = { [Property in keyof IPublicTimeZones_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicUnits {
    id: string;
    brand_id?: string;
    entity_id?: string;
    name: string;
    unit_type?: string;
}
export type IPublicUnits_P = Partial<IPublicUnits>;
export type IPublicUnits_S = { [Property in keyof IPublicUnits_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicUserIdentities {
    id: string;
    email: string;
    password?: string;
    full_name?: string;
    designation?: string;
    is_active?: boolean;
    created_at?: Date;
}
export type IPublicUserIdentities_P = Partial<IPublicUserIdentities>;
export type IPublicUserIdentities_S = { [Property in keyof IPublicUserIdentities_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicUserRoles {
    id: string;
    brand_id?: string;
    blueprint?: string;
    hierarchy?: string;
    instance_name?: string;
    is_read_only?: boolean;
    scope_type?: string;
    is_all_entities?: boolean;
    is_all_units?: boolean;
}
export type IPublicUserRoles_P = Partial<IPublicUserRoles>;
export type IPublicUserRoles_S = { [Property in keyof IPublicUserRoles_P]: 1 | -1 };
} }
export namespace Bata {
export namespace bata_db {
export interface IPublicUsers {
    id?: number;
    username: string;
    password: string;
    email?: string;
    user_type?: string;
    unit_id?: number;
    active?: boolean;
    created_at?: Date;
}
export type IPublicUsers_P = Partial<IPublicUsers>;
export type IPublicUsers_S = { [Property in keyof IPublicUsers_P]: 1 | -1 };
} }