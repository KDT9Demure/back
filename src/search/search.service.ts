import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsRepository } from 'src/repository/goods.repository';
import {Goods} from "../entity/goods.entity";

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(GoodsRepository)
        private goodsRepository:GoodsRepository,
    ){}

    async getGoodsBySearch(q:string,page:number,sort:string,color:string):Promise<Goods[]>{
        let good;
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
        const goods =  this.goodsRepository
            .createQueryBuilder('goods')
            .orderBy(order)
            .skip((page - 1) * 20)
            .take(20)

        if(color != undefined){
            good = await goods.where('type_name like :name AND color like :color', {name: `%${q}%`, color: `%${color}%` })
                .getMany();
        }else{
            good = await goods.where('type_name like :name ', {name: `%${q}%` })
                .getMany()
        }
        return good
    }
}
