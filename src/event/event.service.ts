import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponRepository } from 'src/repository/coupon.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { User_couponRepository } from 'src/repository/user_coupon.repository';
import { EventCredentialDto } from './dto/event.credential.dto';
import { UserEventCredentialDto } from './dto/user-event.credential.dto';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(CouponRepository)
        private couponRepository:CouponRepository,
        
        @InjectRepository(CategoryRepository)
        private categoryRepository:CategoryRepository,

        @InjectRepository(User_couponRepository)
        private user_couponRepository:User_couponRepository,
    ){}

    createUserCoupon(userEventCredentialDto:UserEventCredentialDto):Promise<object>{
        return this.user_couponRepository.createUserCoupon(userEventCredentialDto);
    }

    createCoupon(eventCredentialDto:EventCredentialDto):Promise<object>{
        return this.couponRepository.createCoupon(eventCredentialDto);
    }
}
