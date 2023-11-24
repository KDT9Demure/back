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

    @Patch('/update')
    updateUser(@Body(ValidationPipe) updateUserCrendentialDto:UpdateUserCrendentialDto):Promise<object>{
        return this.authService.updateUser(updateUserCrendentialDto)
    }

    @Delete('/update')
    deleteUser(@Body() id:number):Promise<object>{
        return this.authService.deleteUser(id);
    }

    @Get('/kakao-login')
    kakaoLogin(@Query('code') code: string) {
        return this.authService.kakaoLogin(code);
    }
}
