import {DataSource, EntityRepository, Repository} from "typeorm";
import {Goods} from "../entity/goods.entity";

@EntityRepository(Goods)
export class GoodsRepository extends Repository<Goods>{
    constructor(dataSource: DataSource) {
        super(Goods, dataSource.createEntityManager());
    }
}