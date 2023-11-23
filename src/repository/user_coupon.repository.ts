import { User_coupon } from "src/entity/user_coupon.entity";
import { UserEventCredentialDto } from "src/event/dto/user-event.credential.dto";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(User_coupon)
export class User_couponRepository extends Repository<User_coupon>{
    constructor(private readonly dataSource:DataSource){
        super(User_coupon, dataSource.createEntityManager());
    }

    async createUserCoupon(userEventCredentialDto:UserEventCredentialDto):Promise<object>{

        const {user_id, coupon_id} = userEventCredentialDto;

        try{
            const user_coupon = this.create({user_id, coupon_id, use:true});
            await this.save(user_coupon);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }
}