import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository:CategoryRepository,
    ){}
}
