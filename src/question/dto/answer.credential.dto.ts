import { IsNumber, IsString } from "class-validator";

export class AnswerCredentialDto {
    @IsNumber()
    question_id:number;

    @IsString()
    content:string;
}