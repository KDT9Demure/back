import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Goods } from "./goods.entity";

@Entity()
export class Buy extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    buy_count:number;

    @ManyToOne(type=> Goods, goods=>goods.buys)
    goods_id:Goods;
}