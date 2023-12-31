import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({name: 'user_login_history'})
export class UserLogin{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.user_id)
    @JoinColumn({ name: 'user_id' })
    user_id: number;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    login_time: Date;
}