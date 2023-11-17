import {DataSource, EntityRepository, Repository} from "typeorm";
import {Category, Goods} from "./product.entity";

@EntityRepository(Category)
export class ProductRepository extends Repository<Category>{
    constructor(dataSource: DataSource) {
        super(Category, dataSource.createEntityManager());
    }
}
