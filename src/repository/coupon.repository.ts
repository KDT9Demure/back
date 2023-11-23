import { Coupon } from "src/entity/coupon.entity";
import { EventCredentialDto } from "src/event/dto/event.credential.dto";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Coupon)
export class CouponRepository extends Repository<Coupon>{
    constructor(private readonly dataSource:DataSource){
        super(Coupon, dataSource.createEntityManager());
    }

    async createCoupon(eventCredentialDto:EventCredentialDto):Promise<object>{
        const { discount, use_date, coupon_name } = eventCredentialDto;
        const coupon = this.create({discount, use_date, coupon_name});

        try{
            const res = await this.save(coupon);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }
}