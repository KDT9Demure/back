import { Review } from "src/entity/review.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";
import {ReviewCredentialDto} from "../product/dto/review.credential.dto";
import {GoodsRepository} from "./goods.repository";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review>{
    constructor(private readonly dataSource:DataSource){
        super(Review, dataSource.createEntityManager());
    }

}