import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from 'src/repository/product.repository';

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository:ProductRepository,
    ){}
}
