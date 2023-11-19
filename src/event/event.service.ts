import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponRepository } from 'src/repository/coupon.repository';
import { ProductRepository } from 'src/repository/product.repository';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(CouponRepository)
        private couponRepository:CouponRepository,
        
        @InjectRepository(ProductRepository)
        private productRepository:ProductRepository,
    ){}
}
