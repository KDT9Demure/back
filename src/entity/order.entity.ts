import { User } from "src/entity/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Order extends BaseEntity{
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
    user_id:User;

    // @ManyToOne() goods_id

}