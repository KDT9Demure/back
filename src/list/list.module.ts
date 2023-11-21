import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoryRepository} from "../repository/category.repository";
import {GoodsRepository} from "../repository/goods.repository";
import {ListController} from "./list.controller";
import {ListService} from "./list.service";

import {Category} from "../entity/category.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Category])],

  controllers: [ListController],
  providers: [ListService,CategoryRepository,GoodsRepository]
})
export class ListModule{}