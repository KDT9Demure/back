import { IsString, Matches } from "class-validator";
import { UserStatus } from "../status/user.status.enum";

export class AuthCrendentialDto{
    @IsString()
    @Matches(/^[a-z0-9]*$/, {
        message:"아이디는 영어나 숫자만 이용할 수 있습니다."
    })
    userid:string;

    @IsString()
    email:string;

    @IsString()
    user_name:string;

    @IsString()
    password:string;


    grade:UserStatus;
    point:number;
}