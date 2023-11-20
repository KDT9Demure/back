import { IsString, Matches } from "class-validator";

export class UpdateUserCrendentialDto{

    id:number;

    @IsString()
    user_name:string;

    @IsString()
    password:string;
}