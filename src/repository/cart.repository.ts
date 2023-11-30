import { Cart } from "src/entity/cart.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";
import {CartCredentialDto} from "../cart/dto/cart.credential.dto";
import {User} from "../entity/user.entity";
import {Goods} from "../entity/goods.entity";

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart>{
    constructor(private readonly dataSource:DataSource){
        super(Cart, dataSource.createEntityManager());
    }

    async addCart(cartCredentialDto: CartCredentialDto):Promise<object>{
        const {user_id, goods_id, goods_count} = cartCredentialDto;
        console.log(goods_id)
        try{
            
            const cart= this.create({
                user_id, goods_count, goods_id,
            })
            await this.save(cart)
        }catch(err){
            console.log(err);
            return {result : false};
        }
        
        return {result: true}
    }


    async deleteCart(id:number[]):Promise<object>{
        try {
            const cart = await this.delete(id);
            return {result:true}
        }
        catch (error){
            console.log(error);
            return {result: false}
        }
    }

    
}
