import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cart} from "../entity/cart.entity";
import {Coupon} from "../entity/coupon.entity";
import {User} from "../entity/user.entity";
import {Address} from "../entity/address.entity";
import {D_pay} from "../entity/d_pay.entity";
import {ReviewRepository} from "../repository/review.repository";
import {Review} from "../entity/review.entity";
import {Question} from "../entity/question.entity";
import {Order} from "../entity/order.entity";
import {CartRepository} from "../repository/cart.repository";
import {UserRepository} from "../repository/user.repository";
import {CouponRepository} from "../repository/coupon.repository";
import {D_payRepository} from "../repository/d_pay.repository";
import {QuestionRepository} from "../repository/question.repository";
import {OrderRepository} from "../repository/order.repository";

@Module({
  imports:[TypeOrmModule.forFeature([Cart,User,Coupon,Address,D_pay,Review,Question,Order])],
  controllers: [ProfileController],
  providers: [ProfileService,CartRepository,UserRepository,CouponRepository,D_payRepository,ReviewRepository,QuestionRepository,OrderRepository]
})
export class ProfileModule {}
