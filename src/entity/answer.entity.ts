import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Answer{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content:string;

    @CreateDateColumn({
        type: 'timestamptz',
    })
    create_date:Date;

    @OneToOne(type => Question, question => question.answer)
    @JoinColumn({name:"question_id"})
    question_id:number;
}