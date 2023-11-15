import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCrendentialDto } from './dto/auth.credential.dto';

@Controller('user')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCrendentialDto:AuthCrendentialDto):Promise<object>{
        return this.authService.signUp(authCrendentialDto);
    }

    // @Post('signin')
    // signIn(@Body(ValidationPipe) ):Promise{

    // }

}
