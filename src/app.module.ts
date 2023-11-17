
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './configs/typeorm.config';
import {ProductModule} from "./product/product.module";



@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule,ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
