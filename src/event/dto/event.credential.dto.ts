import { IsNumber, IsString } from "class-validator";

export class EventCredentialDto {
    @IsNumber()
    discount:number;

    use_date:Date;

    @IsString()
    coupon_name:string;
}