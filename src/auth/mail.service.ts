import { MailerService } from '@nestjs-modules/mailer';
import { ConflictException, Injectable } from '@nestjs/common';
import { SignupEmailCrendentialDto } from './dto/signup-email.credential.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repository/user.repository';


const generateRandomString = (num: number) => {
    const characters: string = '0123456789';
    let result: string = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService,
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
    ) { }

    async sendHello(signupEmailCrendentialDto: SignupEmailCrendentialDto): Promise<object> {

        const { useremail } = signupEmailCrendentialDto;
        const verifyNumber: string = generateRandomString(6);

        try {
            const res = await this.mailerService.sendMail({
                to: useremail,
                from: '"No Reply" <no-reply@gmail.com>',
                subject: 'Demure 인증메일',
                text: '',
                html: `디뮤어 인증번호 입니다. \n${verifyNumber}`,
            })
            return { result: true, verifyNumber };
        } catch (err) {
            new ConflictException(err);
            return { result: false, message: err };
        }
    }

    async findPassword(userid: string, user_name: string) {
        try{
            const user = await this.userRepository.findOne({where:{userid, user_name}});
            
            if(!user){
                return {result:false, message:"사용자 정보를 확인해주세요."}
            }

            const verifyNumber: string = generateRandomString(6);

            const res = await this.mailerService.sendMail({
                to: user.email,
                from: '',
                subject: 'Demure 인증메일',
                text: '',
                html: `디뮤어 인증번호 입니다. \n${verifyNumber}`,
            })
            return { result: true, verifyNumber, id:user.id, email:user.email };
        }catch(err){
            console.log(err);
            return {result:false, message:"오류가 발생했습니다."}
        }
        return
    }
}