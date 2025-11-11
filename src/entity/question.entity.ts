import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { Answer } from "./answer.entity";
import { User } from "./user.entity";

@Entity()
export class Question{
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

    @OneToOne(type => Answer, answer => answer.question_id, {eager:true})
    answer:Answer;

    @ManyToOne(type=> User, user=>user.questions)
    @JoinColumn({name: 'user_id'})

    @Column()
    user_id:number;
}