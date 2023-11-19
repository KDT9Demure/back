
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './configs/typeorm.config';
import {ProductModule} from "./product/product.module";
import { OrderModule } from './order/order.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule, ProductModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
