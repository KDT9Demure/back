import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./user.entity";
import { Goods } from "./goods.entity";

@Entity()
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content:string;

    @Column()
    rate:number;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_date:Date;

    @ManyToOne(type=> User, user=>user.reviews)
    @JoinColumn({name:'user_id'})

    @Column()
    user_id:number;

    @ManyToOne(type=> Goods, goods=>goods.reviews)
    @JoinColumn({name:'goods_id'})

    @Column()
    goods_id:string;
}