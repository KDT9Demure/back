import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as dotenv from 'dotenv';
import { UserRepository } from 'src/repository/user.repository';
import { User } from 'src/entity/user.entity';

dotenv.config();

@Module({
  imports:[
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: process.env.EMAILADDRESS,
          pass: process.env.EMAILPASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@gmail.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }), User
  ],
  providers: [MailService, UserRepository],
  exports:[MailService]
})


export class MailModule {}
