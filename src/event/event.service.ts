import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CouponRepository } from 'src/repository/coupon.repository';
import { CategoryRepository } from 'src/repository/category.repository';
import { User_couponRepository } from 'src/repository/user_coupon.repository';
import { EventCredentialDto } from './dto/event.credential.dto';
import { UserEventCredentialDto } from './dto/user.credential.dto';
import { UseCouponCredentialDto } from './dto/use-coupon.credential.dto';

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

    async useCoupon(useCouponCredentialDto:UseCouponCredentialDto){

        const {id} = useCouponCredentialDto;

        try{
            await this.user_couponRepository.update(id, {use:false});

            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }

    async cancelCoupon(useCouponCredentialDto:UseCouponCredentialDto){
        const {id} = useCouponCredentialDto;

        try{
            await this.user_couponRepository.update(id, {use:true});

            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }

    async getCategoryList(query:string){

        try{
            const category = await this.categoryRepository.find({where:{id:query}, take:10});
            return {result:true, category}
        }catch(err){
            console.log(err);
            return {result:false, message:err}
        }
        
    }
}
