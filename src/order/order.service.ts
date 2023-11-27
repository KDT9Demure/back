import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderRepository } from "../repository/order.repository";
import {Order} from "../entity/order.entity";
import {GoodsRepository} from "../repository/goods.repository";

@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository:OrderRepository,

        @InjectRepository(GoodsRepository)
        private goodsRepository:GoodsRepository
    ){ }

    async CurrentOrder(id:number):Promise<Order[]>{
        const currentOrder = await this.orderRepository.find({where:{id:id}})
        return currentOrder;
    }
    async orderCancel(id:number):Promise<object>{
        try{
            const orderD = await this.orderRepository.find({where:{id}});

            for (let i = 0;i<orderD.length;i++){

                const goods = await this.goodsRepository.findOne({where:{id:orderD[i].goods_id}});
                const goodsDelete = await this.goodsRepository.update(
                    {id:orderD[i].goods_id},
                    {count:goods.count-orderD[i].goods_count}
                );
            }

            if(orderD.length === 0){

                return {result:false}
            }else{
                const orderDelte = await this.orderRepository.delete({id:id})
                return {result:true}
            }
        }catch (e) {
            console.log(e)
            return {result: false}
        }
    }
}
