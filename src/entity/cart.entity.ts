import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Goods } from "./goods.entity";

@Entity()
export class Cart extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    goods_count:number;


    // user_id 조인
    @ManyToOne(type=> User, user=>user.carts)
    user_id:User;

    // goods_id 조인
    @ManyToOne(type=> Goods, goods=>goods.carts)
    goods_id:Goods;
}