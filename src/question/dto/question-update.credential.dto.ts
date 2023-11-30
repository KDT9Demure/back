import { IsBoolean, IsNumber, IsString } from "class-validator";
import { User } from "../../entity/user.entity";

export class QuestionUpdateCredentialDto {

    @IsNumber()
    id:number
    
    @IsBoolean()
    secret:boolean

    @IsString()
    title:string

    @IsString()
    content:string

}