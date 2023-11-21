import { IsNumber } from "class-validator";

export class QuestionDeleteCredentialDto {
    @IsNumber()
    id:number
}