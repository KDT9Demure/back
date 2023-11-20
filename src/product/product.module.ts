import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductController} from "./product.controller";
import {ProductService} from "./product.service";
import {GoodsRepository} from "../repository/goods.repository";

@Module({
    imports:[TypeOrmModule.forFeature([GoodsRepository])],
    controllers: [ProductController],
    providers: [ProductService,GoodsRepository]
})
export class ProductModule{}