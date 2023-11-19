import { EntityRepository, Repository, DataSource } from "typeorm";
import { User } from "../entity/user.entity";
import { AuthCrendentialDto } from "../auth/dto/auth.credential.dto";
import { UserStatus } from "../auth/status/user.status.enum";
import * as bcrypt from "bcryptjs";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    constructor(private readonly dataSource:DataSource){
        super(User, dataSource.createEntityManager());
    }

    async createUser(authCrendentialDto:AuthCrendentialDto):Promise<object>{
        const {userid, user_name, password, email} = authCrendentialDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const user = this.create({
            userid, user_name, email,
            password:hashedPassword,
            grade:UserStatus.NORMAL,
            point:0
        })

        try{
            await this.save(user);
            return {result:true};
        }catch(error){
            let message:string = "";
            if(error.code === '23505'){
                message = "중복된 아이디입니다."
            }
            return {result:false, message};
        }
    }

    
}