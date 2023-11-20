import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Goods } from "./goods.entity";

@Entity()
export class User_coupon extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    use:boolean;

    @ManyToOne(type=> User, user=>user.user_coupons)
    user_id:User;

    @ManyToOne(type=> Goods, goods=>goods.user_coupons)
    goods_id:Goods;
}