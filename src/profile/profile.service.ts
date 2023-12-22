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
import {User} from "../entity/user.entity";
import {Order} from "../entity/order.entity";
import {Address} from "../entity/address.entity";
import {Question} from "../entity/question.entity";
import {Coupon} from "../entity/coupon.entity";
import {User_couponRepository} from "../repository/user_coupon.repository";
import {User_coupon} from "../entity/user_coupon.entity";

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(OrderRepository)
        private readonly orderRepository:OrderRepository,

        @InjectRepository(AddressRepository)
        private readonly addressRepository:AddressRepository,

        @InjectRepository(ReviewRepository)
        private readonly reviewRepository:ReviewRepository,

        @InjectRepository(D_payRepository)
        private readonly d_payRepository:D_payRepository,

        @InjectRepository(UserRepository)
        private readonly userRepository:UserRepository,

        @InjectRepository(CartRepository)
        private readonly cartRepository:CartRepository,

        @InjectRepository(User_couponRepository)
        private readonly user_couponRepository:User_couponRepository,

        @InjectRepository(QuestionRepository)
        private readonly questionRepository:QuestionRepository

    ) {}

    async getUserInfo(user_id: number):Promise<User>{
        const user = await this.userRepository.findOne({where:{id:user_id}})
        return user
    }

    async getOrderInfo(user_id: number):Promise<Order[]>{

        const order = await this.orderRepository.find({where:{user_id}, take:3, order:{create_date:"DESC"}});

        return order;


    }
    async getAddressInfo(user_id:number):Promise<Address[]>{
        const address = await this.addressRepository.find({where:{user_id}})
        return address
    }

    async getQuestionInfo(user_id:number):Promise<Question[]>{
        const question = await this.questionRepository.find({where:{user_id}})
        return question
    }

    async getCouponInfo(user_id:number):Promise<User_coupon[]>{
        const coupon = await this.user_couponRepository.find({where:{user_id, use:true}})
        return coupon
    }

}
