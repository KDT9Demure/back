import { Order } from "src/entity/order.entity";
import { BaseEntity, OneToMany, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Question } from "./question.entity";


@Entity()
@Unique(['userid'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userid:string;

    @Column()
    email:string;

    @Column()
    user_name:string;

    @Column()
    password:string;

    @Column()
    grade:string;

    @Column()
    point:number

    @OneToMany(type => Order, order => order.user_id, {eager:true})
    orders:Order[];

    @OneToMany(type => Question, question => question.user_id, {eager:true})
    questions:Question[];

}