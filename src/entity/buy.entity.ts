import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Buy extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    buy_count:number;

    // goods_id 조인
}