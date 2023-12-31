import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { BuyService } from './buy.service';
import { OrderCredentialDto } from './dto/order.credential.dto';
import { AddressCredentialDto } from './dto/address.credential.dto';
import { AddressUpdateCredentialDto } from './dto/address-update.credential.dto';
import { GoodsGetCredentialDto } from './dto/goods-get.credential.dto';
import { AddressGetCredentialDto } from './dto/address-get.credential.dto';
import { DpayCredentialDto } from './dto/dpay.credential.dto';
import { DpayDeleteCredentialDto } from './dto/dpay-delete.credential.dto';

@Controller('buy')
export class BuyController {
    constructor(
        private buyService:BuyService,
    ){}

    @Get('/goods/get')
    getGoods(@Query() goodsGetCredentialDto:GoodsGetCredentialDto):Promise<object>{
        return this.buyService.getGoods(goodsGetCredentialDto)
    }

    @Post('/coupon/get')
    getCoupon(@Body('user_id') user_id:number){
        return this.buyService.getCoupon(user_id);
    }

    @Post('/address/get')
    getAddress(@Body() addressGetCredentialDto:AddressGetCredentialDto):Promise<object>{
        return this.buyService.getAddress(addressGetCredentialDto)
    }

    @Post('')
    createOrder(@Body('orderArray') orderArray:[]){
        return this.buyService.createOrder(orderArray);
    }

    @Post('/address/add')
    createAddress(@Body() addressCredentialDto:AddressCredentialDto):Promise<object>{
        return this.buyService.createAddress(addressCredentialDto);
    }

    @Patch('/address/default')
    updateDefaultAddress(@Body('id') id:number, @Body('user_id') user_id:number){
        return this.buyService.updateDefaultAddress(id, user_id);
    }

    @Patch('/address/update')
    updateAddress(@Body() addressUpdateCredentialDto:AddressUpdateCredentialDto){
        return this.buyService.updateAddress(addressUpdateCredentialDto);
    }

    @Delete('/address/delete')
    deleteAddress(@Body('id') id:number, @Body('user_id') user_id:number){
        return this.buyService.deleteAddress(id, user_id);
    }

    @Post('/dpay/add')
    createDpay(@Body() dpayCredentialDto:DpayCredentialDto){
        return this.buyService.createDpay(dpayCredentialDto);
    }

    @Get('/dpay')
    getDpay(@Query('user') user:number){
        return this.buyService.getDpay(user);
    }

    @Delete('/dpay/delete')
    deleteDpay(@Body() dpayDeleteCredentialDto:DpayDeleteCredentialDto){
        return this.buyService.deleteDpay(dpayDeleteCredentialDto);
    }
}
