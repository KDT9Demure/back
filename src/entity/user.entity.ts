import { Order } from "src/entity/order.entity";
import { BaseEntity, OneToMany, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Question } from "./question.entity";
import { Address } from "./address.entity";
import { Cart } from "./cart.entity";
import { D_pay } from "./d_pay.entity";
import { Review } from "./review.entity";
import { User_coupon } from "./user_coupon.entity";


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

    @OneToMany(type => Order, order => order.user_id)
    orders:Order[];

    @OneToMany(type => Address, address => address.user_id)
    address:Address[];

    @OneToMany(type => Cart, cart => cart.user_id)
    carts:Cart[];

    @OneToMany(type => Question, question => question.user_id)
    questions:Question[];

    @OneToMany(type => D_pay, d_pay => d_pay.user_id)
    d_pays:D_pay[];

    @OneToMany(type => Review, review => review.user_id)
    reviews:Review[];

    @OneToMany(type => User_coupon, user_coupon => user_coupon.user_id)
    user_coupons:User_coupon[];

}