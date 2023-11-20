import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repository/category.repository";
import {Category, Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
let arr =[];
@Injectable()
export class ProductService{
    constructor(private categoryRepository: CategoryRepository, private goodsRepository:GoodsRepository) {}

    async getGoodsByCategory(category : string): Promise<Goods[]>{
        const categories = await this.categoryRepository.find({
            where: { id: category },
        });
        for(let i =0;i<categories.length;i++){
            const categoryEntity = await this.goodsRepository.find({
                where: { id: categories[i].goods_id },
            });
            arr.push(categoryEntity)
        }

        return arr;
    }
}