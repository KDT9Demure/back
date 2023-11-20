import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartRepository } from 'src/repository/cart.repository';
import {CartCredentialDto} from "./dto/cart.credential.dto";

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartRepository)
        private cartRepository:CartRepository
    ){}

    async addCart(cartCredentialDto: CartCredentialDto):Promise<object>{
        return this.cartRepository.addCart(cartCredentialDto);
    }

    async deleteCart(id: number):Promise<object>{
        return this.cartRepository.deleteCart(id)
    }
}
