import { Review } from "src/entity/review.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";
import {ReviewCredentialDto} from "../product/dto/review.credential.dto";
import {GoodsRepository} from "./goods.repository";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review>{
    constructor(private readonly dataSource:DataSource,private goodsRepository:GoodsRepository){
        super(Review, dataSource.createEntityManager());
    }

    async writeReview(reviewCredentialDto: ReviewCredentialDto):Promise<object>{
        const {user_id, goods_id, rate,content} = reviewCredentialDto;
        const review = this.create({
            user_id,goods_id,rate,content,
            create_date: new Date(),
        })
        try {
            await this.save(review);
            const goods = await this.goodsRepository.findOne({where:{id:goods_id}})
            const rateUpdate = await this.goodsRepository.update({id:goods_id},{rate:goods.rate+rate})
            return {result :true};
        }catch (e){
            console.log(e)
            return { result: false};
        }
    }

}