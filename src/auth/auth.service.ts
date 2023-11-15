import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCrendentialDto } from './dto/auth.credential.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){}

    async signUp(authCrendentialDto:AuthCrendentialDto):Promise<object>{
        return this.userRepository.createUser(authCrendentialDto);
    }

}
