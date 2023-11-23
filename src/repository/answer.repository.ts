
import { Answer } from "src/entity/answer.entity";
import { AnswerCredentialDto } from "src/question/dto/answer.credential.dto";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer>{
    constructor(private readonly dataSource:DataSource){
        super(Answer, dataSource.createEntityManager());
    }
}