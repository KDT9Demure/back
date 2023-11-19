
import { Answer } from "src/entity/answer.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer>{
    constructor(private readonly dataSource:DataSource){
        super(Answer, dataSource.createEntityManager());
    }

    
}