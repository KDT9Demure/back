import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./user.entity";
import { Goods } from "./goods.entity";

@Entity()
export class Cart extends BaseEntity{
    @PrimaryGeneratedColumn({type: "int"})
    id:number;

    @Column()
    goods_count:number;

    // user_id 조인
    @ManyToOne(type=> User, user=>user.carts)
    @JoinColumn({name: 'user_id'})
    user_id:User;

    // goods_id 조인
    @ManyToOne(type=> Goods, goods=>goods.carts)
    @JoinColumn({name:'goods_id'})
    goods_id:Goods;
}