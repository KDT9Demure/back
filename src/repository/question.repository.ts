import { Question } from "src/entity/question.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question>{
    constructor(private readonly dataSource:DataSource){
        super(Question, dataSource.createEntityManager());
    }
}