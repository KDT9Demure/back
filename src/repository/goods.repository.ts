import {DataSource, EntityRepository, Repository} from "typeorm";
import {Category, Goods} from "../entity/goods.entity";

@EntityRepository(Goods)
export class GoodsRepository extends Repository<Goods>{
    constructor(dataSource: DataSource) {
        super(Goods, dataSource.createEntityManager());
    }
}