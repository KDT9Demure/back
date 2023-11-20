import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { CouponRepository } from 'src/repository/coupon.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { Coupon } from 'src/entity/coupon.entity';
import { Category } from 'src/entity/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Coupon, Category]),
  ],
  controllers: [EventController],
  providers: [EventService, CouponRepository, CategoryRepository]
})
export class EventModule {}
