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

    // // 문의 수정하기
    // async updateQeustion():Promise<object>{

    //     try{
    //         const {id, user_name, password} = updateUserCrendentialDto;

    //         const salt = await bcrypt.genSalt();
    //         const hashedPassword = await bcrypt.hash(password, salt);

    //         const user = await this.userRepository.update(id, {user_name, password:hashedPassword});

    //         return {result:true}

    //     }catch(err){
    //         return {result:false, message:"오류가 발생했습니다. "+ err}
    //     }

    //     return this.questionRepository.update()
    // }

    // // 문의 삭제하기
    // async deleteQuestion():Promise<object>{
    //     return this.questionRepository.delete()
    // }
}
