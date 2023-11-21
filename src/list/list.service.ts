import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repository/category.repository";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
import {Category} from "../entity/category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
let goodsArr =[];
@Injectable()
export class ListService{
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category> 
    ) {}


    async getGoodsByCategory(category : string, page:number  ): Promise<Category[]>{
        const categories = await this.categoryRepository.find({
            where: { id: category },
            take: 20,
            skip:(page-1)*20
        });
        console.log(categories);

        return categories;
    }
}