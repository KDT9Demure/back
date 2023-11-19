import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderRepository } from "./order.repository";

@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository:OrderRepository,
    ){ }

    
}
