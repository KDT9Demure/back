import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Goods} from "../../entity/goods.entity";
import {User} from "../../entity/user.entity";
import {IsNull} from "typeorm";

export class CartCredentialDto {

    user_id: number;

    // @IsString()
    goods_id: string;

    @IsNumber()
    goods_count: number

}