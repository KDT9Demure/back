import {Controller, Get, Param, Post} from "@nestjs/common";
import {ProductService} from "./product.service";
import {Goods} from "../entity/goods.entity";

@Controller('list')
export class ProductController{
    constructor(private productService: ProductService) {}

    // @Get('/:category')
    // getGoodsByCategory(@Param('category') category:string): Promise<Goods[]>{
    //     return this.productService.getGoodsByCategory(category);
    // }

}