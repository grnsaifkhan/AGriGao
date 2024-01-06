export class CreateProductDto{
    name: string;
    price: number;
    stock_amount: number;
    regional_provenance: string;
    arrival_date: Date;
    sellers_id: number;
}