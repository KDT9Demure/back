
import { Answer } from "src/entity/answer.entity";
import { AnswerCredentialDto } from "src/question/dto/answer.credential.dto";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Answer)
export class AnswerRepository extends Repository<Answer>{
    constructor(private readonly dataSource:DataSource){
        super(Answer, dataSource.createEntityManager());
    }

    async createAnswer(answerCredentialDto:AnswerCredentialDto){
        const { question_id, content } = answerCredentialDto;

        const answer = this.create({question_id, content, create_date:new Date});

        try{
            await this.save(answer);
            return {result:true}
        }catch(err){
            console.log(err);
        }
        
    }
}