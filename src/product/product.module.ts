import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductRepository} from "../repository/product.repository";
import {ProductController} from "./product.controller";
import {ProductService} from "./product.service";
import {GoodsRepository} from "./goods.repository";

@Module({
    imports:[TypeOrmModule.forFeature([ProductRepository]),TypeOrmModule.forFeature([GoodsRepository])],
    controllers: [ProductController],
    providers: [ProductService,ProductRepository,GoodsRepository]
})
export class ProductModule{}