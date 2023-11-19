import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class D_pay extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    bank_name:string;

    @Column()
    card_number:string;

    @Column()
    card_password:string;

    // user_id 조인
}