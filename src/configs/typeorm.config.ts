import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Goods} from "../entity/goods.entity";
import { Order } from "src/entity/order.entity";
import { Coupon } from "src/entity/coupon.entity";
import { Address } from "src/entity/address.entity";
import { Buy } from "src/entity/buy.entity";
import { Answer } from "src/entity/answer.entity";
import { Cart } from "src/entity/cart.entity";
import { D_pay } from "src/entity/d_pay.entity";
import { Question } from "src/entity/question.entity";
import { Review } from "src/entity/review.entity";
import { User_coupon } from "src/entity/user_coupon.entity";
import { Category } from "src/entity/category.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type:'postgres',
    host:'demure.culickc0o7pc.ap-southeast-2.rds.amazonaws.com',
    port:5432,
    username:'postgres',
    password:'pyjsok5253!',
    database:'demure',
    entities:[__dirname + '../**/*.entity.{js, ts}', User, Goods, Order, Coupon, Address, Buy, Answer, Cart, D_pay, Question, Review, User_coupon, Category],
    synchronize: false,
    ssl:{
        rejectUnauthorized:false
    }
}