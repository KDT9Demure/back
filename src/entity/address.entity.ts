import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    detail:string;

    @Column()
    address:string;

    @Column()
    zip_code:string;

    @Column()
    address_name:string;

    // user_id 와 조인
}