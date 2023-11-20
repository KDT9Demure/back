import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { CategoryRepository } from 'src/repository/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [ListController],
  providers: [ListService, CategoryRepository]
})
export class ListModule {}
