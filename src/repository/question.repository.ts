import { Question } from "src/entity/question.entity";
import { QuestionCredentialDto } from "src/question/dto/question.credential.dto";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question>{
    constructor(private readonly dataSource:DataSource){
        super(Question, dataSource.createEntityManager());
    }

    async createQuestion(questionCredentialDto:QuestionCredentialDto):Promise<object>{
        const {secret, title, content, user_id} = questionCredentialDto;
        
        const question = this.create({
            secret, title, content, user_id,
            create_date:new Date,
            answer_status:false,
        })

        try{
            await this.save(question);
            return {result:true};
        }catch(error){
            return {result:false, message:error};
        }
    }
}