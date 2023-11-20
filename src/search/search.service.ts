import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repository/category.repository';
import { GoodsRepository } from 'src/repository/goods.repository';

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository:CategoryRepository,

        @InjectRepository(GoodsRepository)
        private goodsRepository:GoodsRepository,
    ){}
}
