import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { BuyService } from './buy.service';
import { OrderCredentialDto } from './dto/order.credential.dto';
import { AddressCredentialDto } from './dto/address.credential.dto';
import { AddressUpdateCredentialDto } from './dto/address-update.credential.dto';

@Controller('buy')
export class BuyController {
    constructor(
        private buyService:BuyService,
    ){}

    @Get('/goods/get')
    getGoods(@Query() goodsArray:string){
        this.buyService.getGoods(goodsArray)
    }

    @Get('/address/get')
    getAddress(){
        this.buyService.getAddress()
    }

    @Post('')
    createOrder(@Body() orderArray:[]){
        return this.buyService.createOrder(orderArray);
    }

    @Post('/address/add')
    createAddress(@Body() addressCredentialDto:AddressCredentialDto){
        return this.buyService.createAddress(addressCredentialDto);
    }

    @Patch('/address/update')
    updateAddress(@Body() addressUpdateCredentialDto:AddressUpdateCredentialDto){
        return this.buyService.updateAddress(addressUpdateCredentialDto);
    }

    @Delete('/address/delete')
    deleteAddress(@Body() id:number){
        return this.buyService.deleteAddress(id);
    }


}
