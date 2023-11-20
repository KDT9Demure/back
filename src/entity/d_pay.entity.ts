import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class D_pay extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    bank_name:string;

    @Column()
    card_number:string;

    @Column()
    card_password:string;

    // user_id 조인
    @ManyToOne(type=> User, user=>user.d_pays)
    user_id:User;
}