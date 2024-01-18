import {Controller, Post, Body, ValidationPipe, UseGuards, Patch, Delete, Query, Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCrendentialDto } from './dto/auth.credential.dto';
import { AuthLoginCrendentialDto } from './dto/login.credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from '../entity/user.entity';
import { AuthUserCrendentialDto } from './dto/userid.credential.dto';
import { MailService } from './mail.service';
import { SignupEmailCrendentialDto } from './dto/signup-email.credential.dto';
import { UpdateUserCrendentialDto } from './dto/update-user.credential.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Controller('user')
export class AuthController {
    constructor(private authService:AuthService, private mailService:MailService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCrendentialDto:AuthCrendentialDto):Promise<object>{
        return this.authService.signUp(authCrendentialDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authLoginCrendentialDto:AuthLoginCrendentialDto):Promise<object>{
        return this.authService.signIn(authLoginCrendentialDto);
    }

    @Post('/token')
    @UseGuards(AuthGuard())
    tokenCheck(@GetUser() user:User){
        return user;
    }

    @Post('/duplicate')
    idDuplicationCheck(@Body(ValidationPipe) authUserCrendentialDto:AuthUserCrendentialDto):Promise<object>{
        return this.authService.idDuplicationCheck(authUserCrendentialDto);
    }

    @Post('/email')
    sendMail(@Body(ValidationPipe) signupEmailCrendentialDto:SignupEmailCrendentialDto):Promise<object>{
        return this.mailService.sendHello(signupEmailCrendentialDto);
    }

    @Post('/password/find')
    findPassword(@Body('userid') userid:string, @Body('user_name') user_name:string){
        return this.mailService.findPassword(userid, user_name);
    }

    @Patch('/password/find/update')
    resetPassword(@Body('password') pascdsword:string, @Body('id') id:number){
        return this.authService.resetPassword(password, id);
    }

    @Patch('/update/nopw')
    updateUserNonePassword(@Body('id') id:number, @Body('user_name') user_name:string){
        return this.authService.updateUserNonePassword(id, user_name);
    }

    @Patch('/update')
    updateUser(@Body(ValidationPipe) updateUserCrendentialDto:UpdateUserCrendentialDto):Promise<object>{
        return this.authService.updateUser(updateUserCrendentialDto)
    }

    @Delete('/update')
    deleteUser(@Body() id:number):Promise<object>{
        return this.authService.deleteUser(id);
    }

    @Post('/kakao/code')
    kakaoLogin(@Body('code') code: string) {
        console.log(code)
        return this.authService.kakaoLogin(code);
    }

    @Post('/password/check')
    profilePasswordCheck(@Body('userid') userid:string, @Body('password') password:string){
        return this.authService.profilePasswordCheck(userid, password);
    }

    @Post('/profile/get')
    getProfile(@Body('id') id:number){
        return this.authService.getProfile(id);
    }
}
