import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UseCouponCredentialDto {
    @IsNumber()
    id:number;
}