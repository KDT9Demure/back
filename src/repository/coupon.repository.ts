import { Coupon } from "src/entity/coupon.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Coupon)
export class CouponRepository extends Repository<Coupon>{
    constructor(private readonly dataSource:DataSource){
        super(Coupon, dataSource.createEntityManager());
    }
}