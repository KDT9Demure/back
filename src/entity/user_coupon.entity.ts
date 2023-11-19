import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User_coupon extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    use:boolean;

    // user_id 조인

    // goods_id 조인
}