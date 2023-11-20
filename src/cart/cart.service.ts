import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartRepository } from 'src/repository/cart.repository';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartRepository)
        private cartRepository:CartRepository
    ){}

    // async addCart()
}
