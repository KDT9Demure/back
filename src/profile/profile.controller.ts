import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProfileService} from "./profile.service";

@Controller('api/profile')
export class ProfileController {
    constructor(private profileService:ProfileService) {}

    @Post('/user')
    profile(@Body('user_id') user_id:number){
        return this.profileService.getUserInfo(user_id)
    }
    @Post('/order')
    order(@Body('user_id') user_id:number){
        return this.profileService.getOrderInfo(user_id)
    }
    @Post('/address')
    address(@Body('user_id') user_id:number){
        return this.profileService.getAddressInfo(user_id)
    }

    @Post('/question')
    question(@Body('user_id') user_id:number){
        return this.profileService.getQuestionInfo(user_id)
    }
    @Post('/coupon')
    coupon(@Body('user_id') user_id:number){
        return this.profileService.getCouponInfo(user_id)
    }

}
