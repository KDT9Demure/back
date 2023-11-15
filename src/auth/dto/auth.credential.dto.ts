import { IsString } from "class-validator";
import { UserStatus } from "../status/user.status.enum";

export class AuthCrendentialDto{
    @IsString()
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