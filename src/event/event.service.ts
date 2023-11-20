import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponRepository } from 'src/repository/coupon.repository';
import { CategoryRepository } from 'src/repository/category.repository';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(CouponRepository)
        private couponRepository:CouponRepository,
        
        @InjectRepository(CategoryRepository)
        private productRepository:CategoryRepository,
    ){}
}
