import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../entity/order.entity";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderRepository } from "../repository/order.repository";
import {GoodsRepository} from "../repository/goods.repository";
import {User} from "../entity/user.entity";
import {UserRepository} from "../repository/user.repository";

@Module({
    imports:[
        TypeOrmModule.forFeature([Order,User]),
    ],
    controllers:[OrderController],
    providers:[OrderService, OrderRepository,GoodsRepository,UserRepository],
    exports:[],
})

export class OrderModule {}