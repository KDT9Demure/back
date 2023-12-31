import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entity/question.entity';
import { AnswerRepository } from 'src/repository/answer.repository';
import { QuestionRepository } from 'src/repository/question.repository';
import { QuestionCredentialDto } from './dto/question.credential.dto';
import { QuestionUpdateCredentialDto } from './dto/question-update.credential.dto';
import { QuestionDeleteCredentialDto } from './dto/question-delete.credential.dto';
import { AnswerCredentialDto } from './dto/answer.credential.dto';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(QuestionRepository)
        private questionRepository:QuestionRepository,

        @InjectRepository(AnswerRepository)
        private answerRepository:AnswerRepository,
    ){}

    // 모두 가져오기
    // 페이징 필요
    async getQuestion():Promise<Question[]>{
        try{
            const question = await this.questionRepository.find();
            return question
        }catch(err){
            console.log(err);
        }
    }

    // 문의 작성하기
    async createQuestion(questionCredentialDto:QuestionCredentialDto):Promise<object>{
        return this.questionRepository.createQuestion(questionCredentialDto)
    }

    // 문의 수정하기
    async updateQeustion(questionUpdateCredentialDto:QuestionUpdateCredentialDto):Promise<object>{

        try{
            const { content, title, secret, id } = questionUpdateCredentialDto;
            const user = await this.questionRepository.update(id, {content, title, secret});
            return {result:true}

        }catch(err){
            return {result:false, message:"오류가 발생했습니다. "+ err}
        }
    }

    // 문의 삭제하기
    async deleteQuestion(questionDeleteCredentialDto:QuestionDeleteCredentialDto):Promise<object>{
        try{
            const { id } = questionDeleteCredentialDto;
            const answer = await this.answerRepository.delete({question_id:id});
            const question = await this.questionRepository.delete(id);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false, message:err}
        }
    }

    async createAnswer(answerCredentialDto:AnswerCredentialDto):Promise<object>{
        const { question_id, content } = answerCredentialDto;

        const answer = this.answerRepository.create({question_id, content, create_date:new Date});

        try{
            await this.answerRepository.save(answer);
            await this.questionRepository.update(question_id, {answer_status:true})
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }
}
