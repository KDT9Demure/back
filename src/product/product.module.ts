import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductController} from "./product.controller";
import {ProductService} from "./product.service";
import {GoodsRepository} from "../repository/goods.repository";
import {ReviewRepository} from "../repository/review.repository";
import {OrderRepository} from "../repository/order.repository";

@Module({
    imports:[TypeOrmModule.forFeature([GoodsRepository,ReviewRepository,OrderRepository])],
    controllers: [ProductController],
    providers: [ProductService,GoodsRepository,ReviewRepository,OrderRepository]
})
export class ProductModule{}