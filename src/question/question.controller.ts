import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from 'src/entity/question.entity';
import { QuestionCredentialDto } from './dto/question.credential.dto';

@Controller('question')
export class QuestionController {
    constructor(
        private questionService:QuestionService
    ){}


    // 모두 불러오기
    @Get('/load')
    getQuestion():Promise<Question[]>{
        return this.questionService.getQuestion();
    }

    // 문의 작성
    @Post('/write')
    createQuestion(@Body() questionCredentialDto:QuestionCredentialDto):Promise<object>{
        return this.questionService.createQuestion(questionCredentialDto);
    }

    // @Patch('/update')
    // updateQuestion(){
    //     return this.questionService.updateQeustion()
    // }

    // @Delete('/delete')
    // deleteQuestion(){

    // }

    // @Post('/answer')
    // answerCreate(){

    // }

}
