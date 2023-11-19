import { Review } from "src/entity/review.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review>{
    constructor(private readonly dataSource:DataSource){
        super(Review, dataSource.createEntityManager());
    }
}