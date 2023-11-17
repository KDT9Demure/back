import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    Unique
} from "typeorm";
// import {Unique} from "typeorm/browser";

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

@Entity({name: 'category'})
// @Unique(['id','goods_id'])
export class Category extends BaseEntity{
    @PrimaryColumn()
    goods_id: string;

    @Column()
    name: string;

    @PrimaryColumn()
    id: string;

    @ManyToOne(()=>Goods,(goods)=>goods.categories)
    @JoinColumn({ name: 'goods_id' })
    goods: Goods
}
