import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repository/category.repository";
import {Category} from "../entity/category.entity";
import { Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
@Injectable()
export class ListService{
    constructor(
        @InjectRepository(CategoryRepository)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async getGoodsByCategory(category : string, page:number ,sort:string ): Promise<Category[]>{
        const order: { [key: string]: 'ASC' | 'DESC' } = {};
        if (sort === "low") {
            order['goods.price'] = 'ASC';
        } else if(sort === "high"){
            order['goods.price'] = 'DESC';
        } else if(sort === "best"){
            order['goods.count'] = 'DESC'
        } else if(sort === undefined){
            order['goods.count'] = 'DESC'
        }
        const categories = await this.categoryRepository
            .createQueryBuilder('category')
            .leftJoinAndSelect('category.goods_id', 'goods')
            .where('category.id = :category', { category })
            .orderBy(order)
            .skip((page - 1) * 20)
            .take(20)
            .getMany();
        return categories;
    }
}