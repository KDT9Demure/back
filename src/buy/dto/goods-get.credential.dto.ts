import { IsString } from "class-validator";


export class GoodsGetCredentialDto {
    @IsString()
    goods_ids:string;

}