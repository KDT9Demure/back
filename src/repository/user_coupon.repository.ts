import { User_coupon } from "src/entity/user_coupon.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(User_coupon)
export class User_couponRepository extends Repository<User_coupon>{
    constructor(private readonly dataSource:DataSource){
        super(User_coupon, dataSource.createEntityManager());
    }
}