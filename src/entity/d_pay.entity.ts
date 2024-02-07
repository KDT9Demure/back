import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class D_pay{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    bank_name:string;

    @Column()
    card_number:string;

    @ManyToOne(type=> User, user=>user.d_pays)
    @JoinColumn({name:"user_id"})

    @Column()
    user_id:number;
}