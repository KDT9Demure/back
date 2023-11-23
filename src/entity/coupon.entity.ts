import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from "typeorm";
import { User_coupon } from "./user_coupon.entity";

@Entity()
export class Coupon extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    discount:number;

    @CreateDateColumn({
        type: 'timestamptz'
    })
    use_date:Date;

    @Column()
    coupon_name:string;

    @OneToOne(type=> User_coupon, user_coupon=>user_coupon.coupon_id)
    user_coupons:User_coupon[]
}