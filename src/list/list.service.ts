import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repository/category.repository";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
let arr =[];
@Injectable()
export class ListService{
    constructor(private categoryRepository: CategoryRepository, private goodsRepository:GoodsRepository) {}

    async getGoodsByCategory(category : string, page:number ): Promise<Goods[]>{
        const categories = await this.categoryRepository.find({
            where: { id: category },
            take: 20,
            skip:(page-1)*10
        });
        for(let i =0;i<categories.length;i++){
            const categoryEntity = await this.goodsRepository.find({
                where: { id: String(categories[i].goods_id) },
            });
            arr.push(categoryEntity)
        }

        return arr;
    }
}