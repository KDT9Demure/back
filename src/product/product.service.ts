import {Injectable} from "@nestjs/common";
import {ProductRepository} from "./product.repository";
import {Category, Goods} from "../entity/product.entity";
import {GoodsRepository} from "./goods.repository";
let arr =[];
@Injectable()
export class ProductService{
    constructor(private productRepository: ProductRepository,private goodsRepository:GoodsRepository) {}

    async getGoodsByCategory(category : string): Promise<Goods[]>{
        const categories = await this.productRepository.find({
            where: { id: category },
        });
        for(let i =0;i<categories.length;i++){
            const categoryEntity = await this.goodsRepository.find({
                where: { id: categories[i].goods_id },
            });
            arr.push(categoryEntity)
        }

        return arr;
        // const categories = await this.productRepository
        //     .createQueryBuilder('category')
        //     .leftJoinAndSelect('category.goods', 'goods')
        //     .where({ id: category })
        //     .getMany();
        //
        // if (!categories || categories.length === 0) {
        //     throw new Error("Category not found");
        // }

        // return categories.map(category => category.goods).flat();
    }
}