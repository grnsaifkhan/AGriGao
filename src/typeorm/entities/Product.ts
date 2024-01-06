import { Column, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('product')
export class Product{
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    name: string;

    @Column()
    regional_provenance: string;

    @Column({type: 'double'})
    price: number;

    @Column()
    stock_amount: number;

    @Column({default: () => 'false'})
    is_published: boolean;

    @Column()
    arrival_date: Date;

    @Column({default:null, nullable: true, name: 'sellers_id'})
    sellers_id: number;
}