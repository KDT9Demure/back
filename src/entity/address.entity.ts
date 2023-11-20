import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address extends BaseEntity{
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
    user_id:User;
}