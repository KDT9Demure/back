import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/repository/category.repository';
import { GoodsRepository } from 'src/repository/goods.repository';
import {Goods} from "../entity/goods.entity";

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(GoodsRepository)
        private goodsRepository:GoodsRepository,
    ){}

    async getGoodsBySearch(q:string,page:number,sort:string):Promise<Goods[]>{
        console.log(q,page,sort)
        const order: { [key: string]: 'ASC' | 'DESC' } = {};
        if (sort === "low") {
            order['price'] = 'ASC';
        } else if(sort === "high"){
            order['price'] = 'DESC';
        } else if(sort === "best"){
            order['count'] = 'DESC'
        } else if(sort === undefined){
            order['count'] = 'DESC'
        }
        const goods = await this.goodsRepository
            .createQueryBuilder('goods')
            .where('type_name like :name', {name: `%${q}%` })
            .orderBy(order)
            .skip((page - 1) * 20)
            .take(20)
            .getMany();
        return goods
    }


}
