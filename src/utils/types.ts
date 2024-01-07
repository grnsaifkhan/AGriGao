export type CreateUserParams = {
    name: string;
    birthdate: Date;
    street: string;
    house_number: string;
    additional_house_info: string;
    postcode: string;
    city: string;
    country: string;
    residence_card_number: string;
    username: string;
    email: string;
    password: string;
    user_type: string;
}


export type UpdateUserParams = {
    name: string;
    birthdate: Date;
    street: string;
    house_number: string;
    additional_house_info: string;
    postcode: string;
    city: string;
    country: string;
    residence_card_number: string;
    username: string;
    email: string;
    password: string;
}


export type LoginUserParams = {
    username: string;
    password: string;
}


export type LoginHistoryParams = {
    user_id: number;
}


export type CreateProductParams = {
    name: string;
    price: number;
    stock_amount: number;
    regional_provenance: string;
    arrival_date: Date;
    sellers_id: number;
}


export type CreateProductGroupParam = {
    is_product_group_available: boolean;
    product_id: number[];
    is_product_published: boolean;
    discount: number;
    quantity: number;
}
