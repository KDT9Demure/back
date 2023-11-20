import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/entity/question.entity';
import { AnswerRepository } from 'src/repository/answer.repository';
import { QuestionRepository } from 'src/repository/question.repository';
import { QuestionCredentialDto } from './dto/question.credential.dto';

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
}
