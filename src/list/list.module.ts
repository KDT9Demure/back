import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoryRepository} from "../repository/category.repository";
import {GoodsRepository} from "../repository/goods.repository";
import {ListController} from "./list.controller";
import {ListService} from "./list.service";

@Module({
  imports:[TypeOrmModule.forFeature([CategoryRepository,GoodsRepository])],
  controllers: [ListController],
  providers: [ListService,CategoryRepository,GoodsRepository]
})
export class ListModule{}