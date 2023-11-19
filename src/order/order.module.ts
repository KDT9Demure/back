import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../entity/order.entity";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { OrderRepository } from "../repository/order.repository";

@Module({
    imports:[
        TypeOrmModule.forFeature([Order]),
    ],
    controllers:[OrderController],
    providers:[OrderService, OrderRepository],
    exports:[],
})

export class OrderModule {}