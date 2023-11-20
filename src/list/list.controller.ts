import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {Goods} from "../entity/goods.entity";
import {ListService} from "./list.service";

@Controller('list')
export class ListController{
    constructor(private listService: ListService) {}

    @Get('/:category/')
    getGoodsByCategory(@Param('category') category:string,@Body('page')page: number): Promise<Goods[]>{
        return this.listService.getGoodsByCategory(category,page);
    }

}