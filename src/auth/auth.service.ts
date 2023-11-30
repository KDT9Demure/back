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
import {UserStatus} from "./status/user.status.enum";
import {User} from "../entity/user.entity";
import {OrderRepository} from "../repository/order.repository";
import {AddressRepository} from "../repository/address.repository";
import {ReviewRepository} from "../repository/review.repository";
import {D_payRepository} from "../repository/d_pay.repository";
import {CartRepository} from "../repository/cart.repository";
import {User_couponRepository} from "../repository/user_coupon.repository";
import {QuestionRepository} from "../repository/question.repository";


dotenv.config();

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService: JwtService,
        private readonly httpService:HttpService,

        @InjectRepository(OrderRepository)
        private readonly orderRepository:OrderRepository,

        @InjectRepository(AddressRepository)
        private readonly addressRepository:AddressRepository,

        @InjectRepository(ReviewRepository)
        private readonly reviewRepository:ReviewRepository,

        @InjectRepository(D_payRepository)
        private readonly d_payRepository:D_payRepository,

        @InjectRepository(CartRepository)
        private readonly cartRepository:CartRepository,

        @InjectRepository(User_couponRepository)
        private readonly user_couponRepository:User_couponRepository,

        @InjectRepository(QuestionRepository)
        private readonly questionRepository:QuestionRepository
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

    // 비밀번호 제외하고 업데이트
    async updateUserNonePassword(id:number, user_name:string){
        try{
            const user = await this.userRepository.update(id, {user_name});
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다. "+ err}
        }
    }

    // 비밀번호도 함께 업데이트
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

            const address = await this.addressRepository.delete({user_id:id})
            const question = await this.questionRepository.delete({user_id:id})
            const order = await this.orderRepository.delete({user_id:id})
            const coupon = await this.user_couponRepository.delete({user_id:id})
            const review = await this.reviewRepository.delete({user_id:id})
            const d_pay = await this.d_payRepository.delete({user_id:id})
            const cart = await this.cartRepository.delete({user_id:id})
            const user = await this.userRepository.delete(id);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다. " + err};
        }
    }


    async kakaoLogin(code:string){
        const KAKAO_CLIENT_ID = process.env.KAKAO_APIKEY
        const KAKAO_REDIRECT_URL = process.env.REDIRECT_URI

        const result = await axios({
            method: "POST",
            url: "https://kauth.kakao.com/oauth/token",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data: {
                grant_type: "authorization_code",
                client_id: KAKAO_CLIENT_ID,
                redirect_uri: KAKAO_REDIRECT_URL,
                code: code,
            },
        })
        const user_ifo = await
            axios.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    Authorization: `Bearer ${result.data.access_token}`
                },
            });
        const user_id: string = user_ifo.data.id;
        const user_name:string = user_ifo.data.kakao_account.profile.nickname;
        const email:string = user_ifo.data.kakao_account.email;
        let user = await this.userRepository.findOne({where:{userid:user_id}})
        const password = "jasdbfksbdfm"
        console.log(user)
        if(!user){
            const user_info:User = this.userRepository.create({
                userid : user_id,
                user_name: user_name,
                email: email,
                password: password,
                grade: UserStatus.NORMAL,
                point: 0
            })
            try{
                this.userRepository.save(user_info)
                user = await this.userRepository.findOne({where:{userid:user_id}})
            }catch (e) {
                console.log(e)
            }
        }
        console.log("!@",user)
        const payload = { user_id, id:user.id };
        const accessToken = await this.jwtService.sign(payload)

        return {result:true, accessToken};
    }

    async profilePasswordCheck(userid:string, password:string){
        try{
            const user = await this.userRepository.findOne({where:{userid}});

            if(user && (await bcrypt.compare(password, user.password))){
                return {result:true};
            }
            else{
                return {result:false, message:"비밀번호가 틀립니다."}
            }
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다."}
        }
    }

    async getProfile(id:number){
        try{
            const user = await this.userRepository.findOne({where:{id}});
            return {result:true, user}
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다."}
        }
    }

    async resetPassword(password:string, id:number){
        try{
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await this.userRepository.update(id, {password:hashedPassword});

            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다."}
        }
    }
}
