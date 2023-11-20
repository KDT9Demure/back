import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(
        private questionService:QuestionService
    ){}

    @Get('/load')
    getQuestion(){
        return this.questionService
    }
}
