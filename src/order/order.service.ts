import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderRepository } from "../repository/order.repository";
import {Order} from "../entity/order.entity";
import {GoodsRepository} from "../repository/goods.repository";
import {UserRepository} from "../repository/user.repository";

@Injectable()
export class OrderService{
    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository:OrderRepository,

        @InjectRepository(GoodsRepository)
        private goodsRepository:GoodsRepository,

        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
    ){ }

    async CurrentOrder(id:number):Promise<Order[]>{
        const currentOrder = await this.orderRepository.find({where:{id:id}})
        return currentOrder;
    }
    async orderCancel(id:number):Promise<object>{
        try{
            const orderD = await this.orderRepository.find({where:{id}});
            for (let i = 0;i<orderD.length;i++){
                const goods = await this.goodsRepository.findOne({where:{id:orderD[i].goods_id.id}});
                const goodsDelete = await this.goodsRepository.update(
                    {id:orderD[i].goods_id.id},
                    {count:goods.count-orderD[i].goods_count}
                );
            }
            console.log(orderD.length)
            if(orderD.length === 0){
                return {result:false}
            }else{
                const orderPoint = await this.orderRepository.findOne({where:{id}})
                const user = await this.userRepository.findOne({where: {id: orderD[0].user_id}})
                const minusPoint = await this.userRepository.update({id:orderD[0].user_id},{point: user.point-(orderPoint.amount/20)})

                const orderDelete = await this.orderRepository.delete({id:id})
                return {result:true}
            }
        }catch (e) {
            console.log(e)
            return {result: false}
        }
    }
}
