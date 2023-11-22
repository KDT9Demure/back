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

@Module({
  imports:[
    TypeOrmModule.forFeature([Order, Address, Goods]),
  ],
  controllers: [BuyController],
  providers: [BuyService, OrderRepository, AddressRepository, GoodsRepository]
})
export class BuyModule {}
