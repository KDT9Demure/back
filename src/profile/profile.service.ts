import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {OrderRepository} from "../repository/order.repository";
import {AddressRepository} from "../repository/address.repository";
import {GoodsRepository} from "../repository/goods.repository";
import {D_payRepository} from "../repository/d_pay.repository";
import {UserRepository} from "../repository/user.repository";
import {CartRepository} from "../repository/cart.repository";
import {CouponRepository} from "../repository/coupon.repository";
import {ReviewRepository} from "../repository/review.repository";
import {QuestionRepository} from "../repository/question.repository";

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(OrderRepository)
        private readonly orderRepository:OrderRepository,

        // @InjectRepository(AddressRepository)
        // private readonly addressRepository:AddressRepository,

        @InjectRepository(ReviewRepository)
        private readonly reviewRepository:ReviewRepository,

        @InjectRepository(D_payRepository)
        private readonly d_payRepository:D_payRepository,

        @InjectRepository(UserRepository)
        private readonly userRepository:UserRepository,

        @InjectRepository(CartRepository)
        private readonly cartRepository:CartRepository,

        @InjectRepository(CouponRepository)
        private readonly couponRepository:CouponRepository,

        @InjectRepository(QuestionRepository)
        private readonly questionRepository:QuestionRepository

    ) {}

}
