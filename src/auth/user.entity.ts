import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
@Unique(['userid'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userid:string;

    @Column()
    email:string;

    @Column()
    user_name:string;

    @Column()
    password:string;

    @Column()
    grade:string;

    @Column()
    point:number

}