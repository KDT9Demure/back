import { Buy } from "src/entity/buy.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Buy)
export class BuyRepository extends Repository<Buy>{
    constructor(private readonly dataSource:DataSource){
        super(Buy, dataSource.createEntityManager());
    }

    
}