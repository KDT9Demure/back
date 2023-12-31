import { Category } from "src/entity/category.entity";
import {DataSource, EntityRepository, Repository} from "typeorm";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    constructor(dataSource: DataSource) {
        super(Category, dataSource.createEntityManager());
    }
}
