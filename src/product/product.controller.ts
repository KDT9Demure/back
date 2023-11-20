import {Controller, Get, Param, Post} from "@nestjs/common";
import {ProductService} from "./product.service";
import {Goods} from "../entity/goods.entity";

@Controller('product')
export class ProductController{
    constructor(private productService: ProductService) {}
    @Get('/:id')
    getGoods(@Param('id') id: string):Promise<Goods>{
        return this.productService.getGoods(id)
    }
}