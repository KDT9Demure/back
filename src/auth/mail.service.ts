import { MailerService } from '@nestjs-modules/mailer';
import { ConflictException, Injectable } from '@nestjs/common';
import { SignupEmailCrendentialDto } from './dto/signup-email.credential.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendHello(signupEmailCrendentialDto:SignupEmailCrendentialDto): Promise<object> {

    const {useremail} = signupEmailCrendentialDto;
    console.log(useremail);

    const generateRandomString = (num:number) => {
        const characters:string ='0123456789';
        let result:string = '';
        const charactersLength = characters.length;
        for (let i = 0; i < num; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const verifyNumber:string = generateRandomString(6);

    try{
        const res = await this.mailerService.sendMail({
            to: useremail,
            from: '',
            subject: 'Demure 인증메일',
            text: '',
            html: verifyNumber,
        })
      return {result:true, verifyNumber};
    }catch(err){
        new ConflictException(err);
        return {result:false, message:err};
    }
  }
}