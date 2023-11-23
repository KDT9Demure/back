import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Goods} from "../entity/goods.entity";
import { Order } from "src/entity/order.entity";
import { Coupon } from "src/entity/coupon.entity";
import { Address } from "src/entity/address.entity";
import { Answer } from "src/entity/answer.entity";
import { Cart } from "src/entity/cart.entity";
import { D_pay } from "src/entity/d_pay.entity";
import { Question } from "src/entity/question.entity";
import { Review } from "src/entity/review.entity";
import { User_coupon } from "src/entity/user_coupon.entity";
import { Category } from "src/entity/category.entity";
import * as dotenv from 'dotenv';

dotenv.config();

export const typeORMConfig : TypeOrmModuleOptions = {
    type:'postgres',
    host:process.env.DB_HOST,
    port:5432,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    entities:[__dirname + '../**/*.entity.{js, ts}', User, Goods, Order, Coupon, Address, Answer, Cart, D_pay, Question, Review, User_coupon, Category],
    synchronize: false,
    logging:true,
    ssl:{
        rejectUnauthorized:false
    },
}