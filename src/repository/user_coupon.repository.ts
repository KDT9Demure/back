import { User_coupon } from "src/entity/user_coupon.entity";
import { UserEventCredentialDto } from "src/event/dto/user.credential.dto";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(User_coupon)
export class User_couponRepository extends Repository<User_coupon>{
    constructor(private readonly dataSource:DataSource){
        super(User_coupon, dataSource.createEntityManager());
    }

    async createUserCoupon(userEventCredentialDto:UserEventCredentialDto):Promise<object>{

        const {user_id, coupon_id} = userEventCredentialDto;

        try{

            const isThere = await this.findOne({where:{user_id, coupon_id}})

            if(!isThere){
                const user_coupon = this.create({user_id, coupon_id, use:true});
                await this.save(user_coupon);
                return {result:true}
                
            }else{
                return {result:false, message:"이미 발급되었습니다."}
            }
        }catch(err){
            console.log(err);
            return {result:false, message:"에러가 발생했습니다."}
        }
    }
}