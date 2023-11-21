import {Injectable} from "@nestjs/common";
import {CategoryRepository} from "../repository/category.repository";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
import {Category} from "../entity/category.entity";
let goodsArr =[];
@Injectable()
export class ListService{
    constructor(private categoryRepository: CategoryRepository, private goodsRepository:GoodsRepository) {}

    async getGoodsByCategory(category : string, page:number  ): Promise<Category[]>{
        const categories = await this.categoryRepository.find({
            where: { id: category },
            take: 20,
            skip:(page-1)*20
        });
        console.log(categories)
        // let s ='';
        // if(sort === "ASC"){
        //     s = 'ASC';
        // }else if(sort==="DESC"){
        //     s = 'DESC';
        // }else if (sort === ""){
        //
        // }
        // for(let i =0;i<categories.length;i++){
        //     const categoryEntity = await this.goodsRepository.find({
        //         where: { id: String(categories[i].goods_id) },
        //         // order: {price: s}
        //     });
        //     goodsArr.push(categoryEntity);
        // }
        return categories;
    }
}