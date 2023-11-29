import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Goods } from "./goods.entity";
import { Coupon } from "./coupon.entity";

@Entity()
export class User_coupon extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    use:boolean;

    @ManyToOne(type=> User, user=>user.user_coupons)
    @JoinColumn({name:"user_id"})

    @Column()
    user_id:number;

    @OneToOne(type=> Coupon, coupon=>coupon.user_coupons, {eager:true})
    @JoinColumn({name:"coupon_id"})

    @Column()
    coupon_id:number;
}