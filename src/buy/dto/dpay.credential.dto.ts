import { IsNumber, IsString } from "class-validator";


export class DpayCredentialDto {
    user_id:number;

    @IsString()
    bank_name:string;

    @IsString()
    card_number:string;
}