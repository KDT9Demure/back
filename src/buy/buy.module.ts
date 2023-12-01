import { Module } from '@nestjs/common';
import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/repository/order.repository';
import { Order } from 'src/entity/order.entity';
import { AddressRepository } from 'src/repository/address.repository';
import { GoodsRepository } from 'src/repository/goods.repository';
import { Address } from 'src/entity/address.entity';
import { Goods } from 'src/entity/goods.entity';
import {User} from "../entity/user.entity";
import {UserRepository} from "../repository/user.repository";
import { D_pay } from 'src/entity/d_pay.entity';
import { D_payRepository } from 'src/repository/d_pay.repository';
import { CartRepository } from 'src/repository/cart.repository';
import { Cart } from 'src/entity/cart.entity';
import { User_coupon } from 'src/entity/user_coupon.entity';
import { User_couponRepository } from 'src/repository/user_coupon.repository';


@Module({
  imports:[
    TypeOrmModule.forFeature([Order, Address, Goods, D_pay, User, Cart, User_coupon]),
  ],
  controllers: [BuyController],
  providers: [BuyService, OrderRepository, AddressRepository, GoodsRepository, D_payRepository, UserRepository, CartRepository, User_couponRepository]


})
export class BuyModule {}
