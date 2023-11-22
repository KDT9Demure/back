import {Body, Controller, Delete, Post} from '@nestjs/common';
import { CartService } from './cart.service';
import {CartCredentialDto} from "./dto/cart.credential.dto";

@Controller('cart')
export class CartController {
    constructor(
        private cartService:CartService
    ){}
    @Post('/')
    addCart(@Body() cartCredentialDto: CartCredentialDto){
        return this.cartService.addCart(cartCredentialDto)
    }

    @Delete('/delete')
    delteCart(@Body() id: number):Promise<object>{
        return this.cartService.deleteCart(id)
    }
}
