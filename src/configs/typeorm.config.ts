import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import {Category, Goods} from "../product/product.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type:'postgres',
    host:'demure.culickc0o7pc.ap-southeast-2.rds.amazonaws.com',
    port:5432,
    username:'postgres',
    password:'pyjsok5253!',
    database:'demure',
    entities:[__dirname + '../**/*.entity.{js, ts}', User,Category,Goods],
    synchronize: false,
    ssl:{
        rejectUnauthorized:false
    }
}