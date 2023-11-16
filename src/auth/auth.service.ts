import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCrendentialDto } from './dto/auth.credential.dto';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt/dist';
import { AuthLoginCrendentialDto } from './dto/login.credential.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService: JwtService
    ){}

    async signUp(authCrendentialDto:AuthCrendentialDto):Promise<object>{
        return this.userRepository.createUser(authCrendentialDto);
    }

    async signIn(authLoginCrendentialDto:AuthLoginCrendentialDto):Promise<object>{
        const {userid, password} = authLoginCrendentialDto;
        
        const user = await this.userRepository.findOne({where:{userid}});

        if(user && (await bcrypt.compare(password, user.password))){
            const payload = { userid, id:user.id };
            const accessToken = await this.jwtService.sign(payload)

            return {result:true, accessToken};
        }
        else{
            return {result:false, message:"로그인 실패"}
        }
        
    }

}
