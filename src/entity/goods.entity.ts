import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryColumn
} from "typeorm";
import { Category } from "./category.entity";
import { Buy } from "./buy.entity";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";
import { Review } from "./review.entity";
import { User_coupon } from "./user_coupon.entity";



@Entity()
export class Goods extends BaseEntity{
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

    @OneToMany(()=>Category,(category)=>category.goods_id)
    categories : Category[];

    @OneToMany(()=>Buy,(buy)=>buy.goods_id)
    buys : Buy[];

    @OneToMany(()=>Cart,(cart)=>cart.goods_id)
    carts : Cart[];

    @OneToMany(()=>Order, order=>order.goods_id)
    orders:Order[];

    @OneToMany(()=>Review, review=>review.goods_id)
    reviews:Review[];

    @OneToMany(()=>User_coupon, user_coupon=>user_coupon.goods_id)
    user_coupons:User_coupon[];
}


