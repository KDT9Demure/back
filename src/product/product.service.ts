import {Injectable} from "@nestjs/common";
import {Goods} from "../entity/goods.entity";
import {GoodsRepository} from "../repository/goods.repository";
import {ReviewRepository} from "../repository/review.repository";
import {ReviewCredentialDto} from "./dto/review.credential.dto";
import {UserRepository} from "../repository/user.repository";
import {OrderRepository} from "../repository/order.repository";
import { where } from "sequelize";
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
        const {user_id, goods_id, rate, content} = reviewCredentialDto;
        try {
            const review = this.reviewRepository.create({
                user_id,goods_id,rate,content,
                create_date: new Date(),
            })
            await this.reviewRepository.save(review);
            const goods = await this.goodsRepository.findOne({where:{id:goods_id}})
            const rateUpdate = await this.goodsRepository.update({id:goods_id},{rate:goods.rate+rate})
            return {result :true};
        }catch(e){
            console.log(e)
            return { result: false};
        }
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