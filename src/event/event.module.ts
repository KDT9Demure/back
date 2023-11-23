import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { CouponRepository } from 'src/repository/coupon.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { Coupon } from 'src/entity/coupon.entity';
import { Category } from 'src/entity/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_couponRepository } from 'src/repository/user_coupon.repository';
import { User_coupon } from 'src/entity/user_coupon.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Coupon, Category, User_coupon]),
  ],
  controllers: [EventController],
  providers: [EventService, CouponRepository, CategoryRepository, User_couponRepository]
})
export class EventModule {}
