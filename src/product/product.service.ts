import {Injectable} from "@nestjs/common";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
import {ReviewRepository} from "../repository/review.repository";
import {ReviewCredentialDto} from "./dto/review.credential.dto";
import {UserRepository} from "../repository/user.repository";
import {OrderRepository} from "../repository/order.repository";
@Injectable()
export class ProductService{
    constructor( private goodsRepository:GoodsRepository,
                 private reviewRepository:ReviewRepository,
                 private orderRepository:OrderRepository
    ) {}

    async getGoods(productId : string): Promise<object>{
        const goodsInfo = await this.goodsRepository.findOne({
            where: { id: productId },
        });
        return {goodsInfo:goodsInfo, avg: goodsInfo.rate/goodsInfo.count};
    }

    async writeReview(reviewCredentialDto:ReviewCredentialDto):Promise<object>{
        return this.reviewRepository.writeReview(reviewCredentialDto)
    }

    async reviewVerify(user_id:number, goods_id:string):Promise<object>{
        const user = await this.orderRepository
            .createQueryBuilder('order')
            .where('order.user_id = :user AND order.goods_id = :goods AND order.delivery_status = :d',{user:user_id,goods:goods_id,d:"배송완료"} )
            .getOne();
        if(user){
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .where('review.user_id = :user AND review.goods_id = :goods',{user:user_id,goods:goods_id} )
                .getOne()
            console.log("r",review, "d",user.delivery_status)
            if(!review){
                return {result: true};
            }else{
                return {result: false};
            }
        }else{
            return {result: false}
        }

    }
}