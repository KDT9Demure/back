import {Body, Controller, Get} from '@nestjs/common';
import {ProfileService} from "./profile.service";

@Controller('profile')
export class ProfileController {
    constructor(private profileService:ProfileService) {}

    @Get('/user')
    profile(@Body('user_id') user_id:number){
        return this.profileService.getUserInfo(user_id)
    }
    @Get('/order')
    order(@Body('user_id') user_id:number){
        return this.profileService.getOrderInfo(user_id)
    }
    @Get('/address')
    address(@Body('user_id') user_id:number){
        return this.profileService.getAddressInfo(user_id)
    }

    @Get('/question')
    question(@Body('user_id') user_id:number){
        return this.profileService.getQuestionInfo(user_id)
    }
    @Get('/coupon')
    coupon(@Body('user_id') user_id:number){
        return this.profileService.getCouponInfo(user_id)
    }

}
