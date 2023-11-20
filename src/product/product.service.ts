import {Injectable} from "@nestjs/common";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
@Injectable()
export class ProductService{
    constructor( private goodsRepository:GoodsRepository) {}

    async getGoods(productId : string): Promise<Goods>{
        const goodsInfo = await this.goodsRepository.findOne({
            where: { id: productId },
        });
        return goodsInfo;
    }
}