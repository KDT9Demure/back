import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderRepository } from "../repository/order.repository";
import {Order} from "../entity/order.entity";

@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository:OrderRepository,
    ){ }

    async CurrentOrder(id:number):Promise<Order[]>{
        const currentOrder = await this.orderRepository.find({where:{id:id}})
        return currentOrder;
    }
    async orderCancel(id:number):Promise<object>{
        try{
            const orderD = await this.orderRepository.find({where:{id}});
            console.log(orderD)
            if(orderD.length === 0){
                return {result:false}
            }else{
                const orderDelete = await this.orderRepository.remove(orderD);
                return {result:true}
            }
        }catch (e) {
            console.log(e)
            return {result: false}
        }
    }
}
