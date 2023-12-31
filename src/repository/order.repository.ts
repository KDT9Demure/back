import { DataSource, EntityRepository, Repository } from "typeorm";
import { Order } from "src/entity/order.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order>{
    constructor(private readonly dataSource:DataSource){
        super(Order, dataSource.createEntityManager());
    }
}