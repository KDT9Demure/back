import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(CategoryRepository)
        private productRepository:CategoryRepository,
    ){}
}
