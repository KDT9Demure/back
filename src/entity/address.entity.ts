import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    detail:string;

    @Column()
    address:string;

    @Column()
    zip_code:string;

    @Column()
    address_name:string;

    @ManyToOne(type=> User, user=>user.address)
    @JoinColumn({name:"user_id"})

    @Column()
    user_id:number;

    @Column()
    default_address: boolean
}