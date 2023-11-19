import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cart extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    goods_count:number;


    // user_id 조인
    // goods_id 조인
}