import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./user.entity";
import { Goods } from "./goods.entity";

@Entity()
export class Cart{
    @PrimaryGeneratedColumn({type: "int"})
    id:number;

    @Column()
    goods_count:number;

    // user_id 조인
    @ManyToOne(type=> User, user=>user.carts)
    @JoinColumn({name: 'user_id'})

    @Column()
    user_id:number;

    // goods_id 조인
    @ManyToOne(type=> Goods, goods=>goods.carts, {eager:true})
    @JoinColumn({name:'goods_id'})

    @Column()
    goods_id:string;
}