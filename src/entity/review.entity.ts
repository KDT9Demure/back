import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content:string;

    @Column()
    rate:number;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_date:Date;

    // user_id 조인

    // goods_id 조인
}