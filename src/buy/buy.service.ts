import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from 'src/repository/address.repository';
import { OrderRepository } from 'src/repository/order.repository';
import { OrderCredentialDto } from './dto/order.credential.dto';

@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(OrderRepository)
        private readonly orderRepository:OrderRepository,

        @InjectRepository(AddressRepository)
        private readonly addressRepository:AddressRepository,
    ){}

    async createOrder(orderArray:[]){
        this.orderRepository.createOrder(orderArray)
    }
    
}
