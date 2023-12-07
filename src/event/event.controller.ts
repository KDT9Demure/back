import { Controller, Post, Patch, Body, Get, Query, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { EventCredentialDto } from './dto/event.credential.dto';
import { UserEventCredentialDto } from './dto/user.credential.dto';
import { UseCouponCredentialDto } from './dto/use-coupon.credential.dto';

@Controller('/api/event')
export class EventController {
    constructor(
        private eventService:EventService,
    ){}

    // 쿠폰 저장
    @Post('/coupon')
    createUserCoupon(@Body() userEventCredentialDto:UserEventCredentialDto):Promise<object>{
        return this.eventService.createUserCoupon(userEventCredentialDto);
    }

    // 쿠폰 생성
    @Post('/coupon/save')
    createCoupon(@Body() eventCredentialDto:EventCredentialDto):Promise<object>{
        return this.eventService.createCoupon(eventCredentialDto);
    }

    // 쿠폰 사용
    @Patch('/coupon/use')
    useCoupon(@Body() useCouponCredentialDto:UseCouponCredentialDto){
        return this.eventService.useCoupon(useCouponCredentialDto);
    }

    // 쿠폰 사용 취소
    @Patch('/coupon/cancel')
    cancelCoupon(@Body() useCouponCredentialDto:UseCouponCredentialDto){
        return this.eventService.cancelCoupon(useCouponCredentialDto);
    }

    @Get('/list')
    getCategoryList(@Query('query') query:string){
        return this.eventService.getCategoryList(query);
    }
}
