import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {Goods} from "./goods.entity";

@Entity({name: 'category'})
export class Category extends BaseEntity{
    @Column()
    name: string;

    @PrimaryColumn()
    id: string;

    // @PrimaryColumn()
    @ManyToOne(()=>Goods,(goods)=>goods.categories)
    @JoinColumn({ name: 'goods_id' })
    goods_id: Goods
}