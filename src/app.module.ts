
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './configs/typeorm.config';
import {ProductModule} from "./product/product.module";
import { OrderModule } from './order/order.module';
import { EventModule } from './event/event.module';
import { ListModule } from './list/list.module';
import { SearchModule } from './search/search.module';
import { BuyModule } from './buy/buy.module';
import { CartModule } from './cart/cart.module';
import { QuestionModule } from './question/question.module';
import {HttpModule} from "@nestjs/axios";
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule, ProductModule, OrderModule, EventModule, ListModule, SearchModule, BuyModule, CartModule, QuestionModule, HttpModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
