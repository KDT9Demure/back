import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repository/category.repository";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
import { Category } from "src/entity/category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ListService{
    constructor(
        // @InjectRepository(CategoryRepository)
        // private categoryRepository: CategoryRepository) {}
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category> 
    ) {}

    async getGoodsByCategory(category : string, page:number ): Promise<Category[]>{

        console.log("page", page, "category", category);

        // let arr =[];
        const [test, categories] = await this.categoryRepository.findAndCount({
           // where: { id: category },
            order: {id: 'ASC'},
           // take: 20,
           // skip: (page - 1) * 20,
        });
        console.log(categories)

        return test;
    }
}