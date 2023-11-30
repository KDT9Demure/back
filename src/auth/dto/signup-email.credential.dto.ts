import { IsString } from "class-validator";

export class SignupEmailCrendentialDto{
    @IsString()
    useremail:string;
}