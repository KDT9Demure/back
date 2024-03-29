import { User } from "src/entity/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Goods } from "./goods.entity";

@Entity()
export class Order{
    @PrimaryColumn()
    id:number;

    @CreateDateColumn({
        type: 'timestamptz' /* timestamp with time zone */,
    })
    create_date:Date;

    @Column()
    address:string;

    @Column()
    payment_type:string;

    @Column()
    goods_count:number;

    @Column()
    delivery_memo:string;

    @Column()
    delivery_date:string;

    @Column()
    delivery_status:string;

    @ManyToOne(type=> User, user=>user.orders)
    @JoinColumn({name:"user_id"})

    @Column()
    user_id:number;

    @ManyToOne(type=> Goods, goods=>goods.orders, {eager:true})
    @JoinColumn({name:"goods_id"})
    
    @Column()
    goods_id:Goods;

    @Column()
    amount:number;

    @Column()
    price:number;

    @PrimaryColumn()
    order_count:number;
}