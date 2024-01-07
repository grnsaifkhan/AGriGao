import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity('product_group')
export class ProductGroup{
    @PrimaryGeneratedColumn()
    product_group_id: number;

    @Column({default: false})
    is_product_group_available: boolean;

    @Column({default: 0})
    discount: number;


    @Column({default: 0})
    quantity: number;

    @Column({default: false})
    is_product_published: boolean;

    @ManyToOne(()=>Product, (product) => product.product_id)
    @JoinColumn({name: 'product_id'})
    product_id: number[];
}
