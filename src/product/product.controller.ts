import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {ProductService} from "./product.service";
import {Goods} from "../entity/goods.entity";
import {ReviewCredentialDto} from "./dto/review.credential.dto";

@Controller('product')
export class ProductController{
    constructor(private productService: ProductService) {}
    @Get('/:id')
    getGoods(@Param('id') id: string):Promise<Goods>{
        return this.productService.getGoods(id)
    }

    @Post('/review')
    writeReview(@Body()reviewCredentialDto:ReviewCredentialDto):Promise<boolean>{
        return this.productService.writeReview(reviewCredentialDto)
    }

    @Post('/review/verify')
    reviewVerify(@Body('user_id')user_id: number,@Body('goods_id') goods_id:string):Promise<boolean>{
        return this.productService.reviewVerify(user_id,goods_id)
    }

}