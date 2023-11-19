import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Coupon extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    discount:number;

    @CreateDateColumn({
        type: 'timestamptz'
    })
    use_date:Date;

    @Column()
    coupon_name:string;
}