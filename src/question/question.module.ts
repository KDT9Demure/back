import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { AnswerRepository } from 'src/repository/answer.repository';
import { QuestionRepository } from 'src/repository/question.repository';
import { Answer } from 'src/entity/answer.entity';
import { Question } from 'src/entity/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Answer, Question]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService, AnswerRepository, QuestionRepository]
})
export class QuestionModule {}
