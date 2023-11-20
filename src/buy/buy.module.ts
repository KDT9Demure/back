import { Module } from '@nestjs/common';
import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buy } from 'src/entity/buy.entity';
import { BuyRepository } from 'src/repository/buy.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([Buy]),
  ],
  controllers: [BuyController],
  providers: [BuyService, BuyRepository]
})
export class BuyModule {}
