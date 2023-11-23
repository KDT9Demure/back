import { IsNumber, IsString } from "class-validator";


export class DpayDeleteCredentialDto {
    @IsNumber()
    id:number;
}