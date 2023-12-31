import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserLogin } from "./UserLogin";

@Entity({name: 'users'})
export class User{

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Column({type: 'date'})
    birthdate: Date;

    @Column()
    street: string;

    @Column()
    house_number: string;

    @Column()
    additional_house_info: string;

    @Column()
    postcode: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    residence_card_number: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    registration_date: Date;

    @Column({default: false})
    is_blocked: boolean;
    
    
}