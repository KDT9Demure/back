import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from 'src/entity/question.entity';
import { QuestionCredentialDto } from './dto/question.credential.dto';
import { QuestionUpdateCredentialDto } from './dto/question-update.credential.dto';
import { QuestionDeleteCredentialDto } from './dto/question-delete.credential.dto';
import { AnswerCredentialDto } from './dto/answer.credential.dto';

@Controller(`${process.env.CONTROLLER_ROUTE}question`)
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

    @Patch('/update')
    updateQuestion(@Body() questionUpdateCredentialDto:QuestionUpdateCredentialDto):Promise<object>{
        return this.questionService.updateQeustion(questionUpdateCredentialDto)
    }

    @Delete('/delete')
    deleteQuestion(@Body() questionDeleteCredentialDto:QuestionDeleteCredentialDto):Promise<object>{
        return this.questionService.deleteQuestion(questionDeleteCredentialDto);
    }

    @Post('/answer')
    answerCreate(@Body() answerCredentialDto:AnswerCredentialDto):Promise<object>{
        return this.questionService.createAnswer(answerCredentialDto);
    }

}
