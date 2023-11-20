import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
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
    user_id:User;

    @ManyToOne(type=> Goods, goods=>goods.reviews)
    goods_id:Goods;
}