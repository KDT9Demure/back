import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Answer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content:string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_date:Date;

    @OneToOne(type => Question, question => question.answer, {eager:false})
    question_id:number;
}