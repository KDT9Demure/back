import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, ManyToOne } from "typeorm";
import { Answer } from "./answer.entity";
import { User } from "./user.entity";

@Entity()
export class Question extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    secret:boolean;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_date:Date;

    @Column()
    title:string;

    @Column()
    content:string;

    @Column()
    answer_status:boolean;

    @OneToOne(type => Answer, answer => answer.question_id)
    answer:Answer;

    // @ManyToOne(type=> User, user=>user.questions, {eager:false})
    // user_id:number;
}