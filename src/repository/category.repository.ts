import {DataSource, EntityRepository, Repository} from "typeorm";
import {Category, Goods} from "../entity/goods.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    constructor(dataSource: DataSource) {
        super(Category, dataSource.createEntityManager());
    }
}
