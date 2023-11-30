import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { GoodsRepository } from 'src/repository/goods.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from 'src/entity/goods.entity';
import { Category } from 'src/entity/category.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Goods, Category])
  ],
  controllers: [SearchController],
  providers: [SearchService, GoodsRepository, CategoryRepository]
})
export class SearchModule {}
