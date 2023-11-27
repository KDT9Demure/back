import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCrendentialDto } from './dto/auth.credential.dto';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt/dist';
import { AuthLoginCrendentialDto } from './dto/login.credential.dto';
import { AuthUserCrendentialDto } from './dto/userid.credential.dto';
import { UserRepository } from 'src/repository/user.repository';
import { UpdateUserCrendentialDto } from './dto/update-user.credential.dto';
import * as dotenv from 'dotenv';
import {firstValueFrom} from "rxjs";
import {HttpService} from "@nestjs/axios";
import axios from "axios";


dotenv.config();

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService: JwtService,
        private readonly httpService:HttpService
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

    async idDuplicationCheck(authUserCrendentialDto:AuthUserCrendentialDto):Promise<object>{
        try{
            const {userid} = authUserCrendentialDto;
            const user = await this.userRepository.findOne({where:{userid}});

            if(!user){
                return {result:true}
            }else{
                return {result:false}
            }
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다."}
        }   
    }

    async updateUser(updateUserCrendentialDto:UpdateUserCrendentialDto):Promise<object>{
        try{
            const {id, user_name, password} = updateUserCrendentialDto;

            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            const user = await this.userRepository.update(id, {user_name, password:hashedPassword});

            return {result:true}

        }catch(err){
            return {result:false, message:"오류가 발생했습니다. "+ err}
        }
    }

    async deleteUser(id:number):Promise<object>{
        try{
            const user = await this.userRepository.delete(id);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다. " + err};
        }
    }


    async kakaoLogin(code:string){
        console.log(process.env.KAKAO_APIKEY)
        const KAKAO_CLIENT_ID = process.env.KAKAO_APIKEY
        const KAKAO_REDIRECT_URL = process.env.REDIRECT_URI
        const kakao_api_url = `https://kauth.kakao.com/oauth/token
        ?grant_type=authorization_code
        &client_id=${KAKAO_CLIENT_ID}
        &redirect_url=${KAKAO_REDIRECT_URL}
        &code=${code}`;
        console.log(kakao_api_url, KAKAO_CLIENT_ID,KAKAO_REDIRECT_URL)
        const token_res = await axios.post(kakao_api_url);
        const access_token: string = token_res.data.access_token;
        console.log(token_res)
        const user_ifo = await
            axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
            });
        const user_id: string = user_ifo.data.id;
        console.log(user_id)
        return token_res.data
    }


}
