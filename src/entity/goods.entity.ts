import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Category } from "./category.entity";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";
import { Review } from "./review.entity";
import { User_coupon } from "./user_coupon.entity";



@Entity()
export class Goods{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    discount: boolean;

    @Column()
    image: string;

    @Column()
    arrange_image: string;

    @Column()
    color: string;

    @Column()
    type_name: string;

    @Column()
    url: string

    @Column()
    count: number;

    @Column()
    rate: number;

    @OneToMany(()=>Category,(category)=>category.goods_id)
    categories : Category[];

    @OneToMany(()=>Cart,(cart)=>cart.goods_id)
    carts : Cart[];

    @OneToMany(()=>Order, order=>order.goods_id)
    orders:Order[];

    @OneToMany(()=>Review, review=>review.goods_id, {eager:true})
    reviews:Review[];
}


