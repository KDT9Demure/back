import { IsNumber, IsString } from "class-validator";
import { Goods } from "src/entity/goods.entity";
import { User } from "src/entity/user.entity";

export class OrderCredentialDto {
    goods_id:string;

    @IsString()
    address:string;

    @IsString()
    payment_type:string;

    @IsNumber()
    goods_count:number;

    user_id:number;

    @IsString()
    delivery_memo:string;

    @IsString()
    delivery_date:string;
    
    @IsString()
    delivery_status:string;

}