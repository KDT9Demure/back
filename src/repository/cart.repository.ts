import { Cart } from "src/entity/cart.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";
import {CartCredentialDto} from "../cart/dto/cart.credential.dto";

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart>{
    constructor(private readonly dataSource:DataSource){
        super(Cart, dataSource.createEntityManager());
    }

    async addCart(cartCredentialDto: CartCredentialDto):Promise<Cart>{
        const {user_id, goods_id, goods_count} = cartCredentialDto;

        const cart:Cart = this.create({
            goods_count:goods_count,
            user_id: user_id,
            goods_id: goods_id
        })
        await this.save(cart);
        return cart
    }

    
}