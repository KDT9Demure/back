import { IsString } from "class-validator";

export class AuthUserCrendentialDto{
    @IsString()
    userid:string;
}