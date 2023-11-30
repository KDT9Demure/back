import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailModule } from './mail.module';
import {HttpModule} from "@nestjs/axios";
import {ProfileService} from "../profile/profile.service";
import {CartRepository} from "../repository/cart.repository";
import {CouponRepository} from "../repository/coupon.repository";
import {D_payRepository} from "../repository/d_pay.repository";
import {ReviewRepository} from "../repository/review.repository";
import {QuestionRepository} from "../repository/question.repository";
import {OrderRepository} from "../repository/order.repository";
import {AddressRepository} from "../repository/address.repository";
import {User_couponRepository} from "../repository/user_coupon.repository";
import {Cart} from "../entity/cart.entity";
import {User_coupon} from "../entity/user_coupon.entity";
import {Address} from "../entity/address.entity";
import {D_pay} from "../entity/d_pay.entity";
import {Review} from "../entity/review.entity";
import {Question} from "../entity/question.entity";
import {Order} from "../entity/order.entity";


@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:'Demure2023',
      signOptions:{
        expiresIn:3600
      }
    }),
    TypeOrmModule.forFeature([Cart,User,User_coupon,Address,D_pay,Review,Question,Order]),
    MailModule,HttpModule
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtStrategy,ProfileService,CartRepository,CouponRepository,D_payRepository,ReviewRepository,QuestionRepository,OrderRepository,AddressRepository,User_couponRepository],
  exports:[JwtStrategy, PassportModule,HttpModule]
})
export class AuthModule {}
