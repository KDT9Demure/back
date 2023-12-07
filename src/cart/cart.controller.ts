import {Body, Controller, Delete, Patch, Post} from '@nestjs/common';
import { CartService } from './cart.service';
import {CartCredentialDto} from "./dto/cart.credential.dto";

@Controller('/api/cart')
export class CartController {
    constructor(
        private cartService:CartService
    ){}
    @Post('/')
    addCart(@Body() cartCredentialDto: CartCredentialDto){
        return this.cartService.addCart(cartCredentialDto)
    }

    @Post('/user')
    getCart(@Body('user_id') user_id:number):Promise<object>{
        return this.cartService.getCart(user_id);
    }

    @Delete('/delete')
    deleteCart(@Body('id') id: number[]):Promise<object>{
        return this.cartService.deleteCart(id);
    }

    @Patch('/update')
    cartUpdate(@Body('id') id:number, @Body('objectCount')objectCount:number):Promise<object>{
        return this.cartService.updateCart(id,objectCount)
    }

}
