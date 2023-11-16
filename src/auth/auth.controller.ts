import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCrendentialDto } from './dto/auth.credential.dto';
import { AuthLoginCrendentialDto } from './dto/login.credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';


@Controller('user')
export class AuthController {
    constructor(private authService:AuthService){}

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
}
