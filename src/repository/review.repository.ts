import { Review } from "src/entity/review.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";
import {ReviewCredentialDto} from "../product/dto/review.credential.dto";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review>{
    constructor(private readonly dataSource:DataSource){
        super(Review, dataSource.createEntityManager());
    }

    async writeReview(reviewCredentialDto: ReviewCredentialDto):Promise<boolean>{
        const {user_id, goods_id, rate,content} = reviewCredentialDto;
        const review = this.create({
            user_id,goods_id,rate,content,
            create_date: new Date(),
        })
        try {
            await this.save(review);
            return true;
        }catch (e){
            console.log(e)
            return false;
        }
    }

}