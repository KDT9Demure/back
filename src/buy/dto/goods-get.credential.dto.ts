import { IsString } from "class-validator";


export class GoodsGetCredentialDto {
    @IsString()
    cart_ids:string;
}