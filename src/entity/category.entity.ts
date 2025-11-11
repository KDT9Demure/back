import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Goods} from "./goods.entity";

@Entity({name: 'category'})
export class Category{
    @Column()
    name: string;

    @PrimaryColumn()
    id: string;

    @ManyToOne(()=>Goods,(goods)=>goods.categories,{eager:true})
    @JoinColumn({ name: 'goods_id' })


    @PrimaryColumn()
    goods_id: string
}