import { IsBoolean, IsString } from "class-validator";
import { User } from "../../entity/user.entity";

export class QuestionCredentialDto {

    
    @IsBoolean()
    secret:boolean

    @IsString()
    title:string

    @IsString()
    content:string

    user_id: number;

}