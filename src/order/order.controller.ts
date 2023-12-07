import {Body, Controller, Delete, Get, Param} from '@nestjs/common';
import { OrderService } from './order.service';
import {Order} from "../entity/order.entity";

@Controller('/api/order')
export class OrderController{
    constructor(
        private orderService:OrderService, 
    ){ }

    @Get('/:id')
    currentOrder(@Param('id') id:number):Promise<Order[]>{
        return this.orderService.CurrentOrder(id);
    }
    @Delete('/cancel')
    orderCancel(@Body('id') id:number){
        return this.orderService.orderCancel(id);
    }

}