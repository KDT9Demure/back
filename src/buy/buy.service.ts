import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BuyRepository } from 'src/repository/buy.repository';

@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(BuyRepository)
        private buyRepository:BuyRepository
    ){

    }
    
}
