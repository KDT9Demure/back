import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { BuyService } from './buy.service';
import { OrderCredentialDto } from './dto/order.credential.dto';

@Controller('buy')
export class BuyController {
    constructor(
        private buyService:BuyService,
    ){}

    @Get('/goods/get')
    getGoods(){

    }

    @Post('')
    createOrder(@Body() orderArray:[]){
        return this.buyService.createOrder(orderArray);
    }

    @Post('/address/add')
    createAddress(){

    }

    @Patch('/address/update')
    updateAddress(){

    }

    @Delete('/address/delete')
    deleteAddress(){

    }


}
