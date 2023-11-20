import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryColumn
} from "typeorm";
import { Category } from "./category.entity";



@Entity()
export class Goods extends BaseEntity{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    discount: boolean;

    @Column()
    image: string;

    @Column()
    arrange_image: string;

    @Column()
    color: string;

    @Column()
    type_name: string;

    @Column()
    url: string

    @OneToMany(()=>Category,(category)=>category.goods)
    categories : Category[]

}


