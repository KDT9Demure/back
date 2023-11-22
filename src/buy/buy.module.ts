import { Module } from '@nestjs/common';
import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderRepository } from 'src/repository/order.repository';
import { Order } from 'src/entity/order.entity';
import { AddressRepository } from 'src/repository/address.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [BuyController],
  providers: [BuyService, OrderRepository, AddressRepository]
})
export class BuyModule {}
