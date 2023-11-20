import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoryRepository} from "../repository/category.repository";
import {ProductController} from "./product.controller";
import {ProductService} from "./product.service";
import {GoodsRepository} from "../repository/goods.repository";

@Module({
    imports:[TypeOrmModule.forFeature([CategoryRepository]),TypeOrmModule.forFeature([GoodsRepository])],
    controllers: [ProductController],
    providers: [ProductService,CategoryRepository,GoodsRepository]
})
export class ProductModule{}