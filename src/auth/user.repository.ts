import { EntityRepository, Repository, DataSource } from "typeorm";
import { User } from "./user.entity";
import { AuthCrendentialDto } from "./dto/auth.credential.dto";
import { UserStatus } from "./status/user.status.enum";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    constructor(private readonly dataSource:DataSource){
        super(User, dataSource.createEntityManager());
    }

    async createUser(authCrendentialDto:AuthCrendentialDto):Promise<object>{
        const {userid, user_name, password, email} = authCrendentialDto;
        const user = this.create({
            userid, user_name, password, email,
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
            return {retult:false, message};
        }

        
    }
}