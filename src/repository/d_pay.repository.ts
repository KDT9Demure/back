import { D_pay } from "src/entity/d_pay.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(D_pay)
export class D_payRepository extends Repository<D_pay>{
    constructor(private readonly dataSource:DataSource){
        super(D_pay, dataSource.createEntityManager());
    }
}