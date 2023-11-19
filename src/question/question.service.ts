import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerRepository } from 'src/repository/answer.repository';
import { QuestionRepository } from 'src/repository/question.repository';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(QuestionRepository)
        private questionRepository:QuestionRepository,

        @InjectRepository(AnswerRepository)
        private answerRepository:AnswerRepository,
    ){}
}
