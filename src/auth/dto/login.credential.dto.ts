import { IsString } from "class-validator";

export class AuthLoginCrendentialDto{
    @IsString()
    userid:string;

    @IsString()
    password:string;

}