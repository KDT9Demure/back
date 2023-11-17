import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeORMConfig } from './configs/typeorm.config';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
