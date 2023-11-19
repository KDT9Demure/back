import { Cart } from "src/entity/cart.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart>{
    constructor(private readonly dataSource:DataSource){
        super(Cart, dataSource.createEntityManager());
    }

    
}