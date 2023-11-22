import { IsNumber, IsString } from "class-validator";


export class AddressCredentialDto {
    @IsString()
    detail:string;

    @IsString()
    address:string;

    user_id:number;

    @IsString()
    zip_code:string;

    @IsString()
    address_name:string;

}