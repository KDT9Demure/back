import {Body, Controller, Param, Post, Query} from '@nestjs/common';
import { SearchService } from './search.service';
import {Category} from "../entity/category.entity";
import {Goods} from "../entity/goods.entity";

@Controller(`${process.env.CONTROLLER_ROUTE}search`)
export class SearchController {
    constructor(
        private searchService:SearchService,
    ){}

    @Post('/')
    getGoodsByCategory(@Query('q') q:string, @Body('page')page: number, @Query('sort')sort:string,@Query('color')color:string) : Promise<Goods[]>{
        return this.searchService.getGoodsBySearch(q,page,sort,color);
    }
}
