import {IsNumber, IsString} from "class-validator";

export class CartCredentialDto {
    @IsNumber()
    user_id: number;

    @IsString()
    goods_id: string;

    @IsNumber()
    goods_count: number
}