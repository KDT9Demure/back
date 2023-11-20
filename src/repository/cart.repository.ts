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
        console.log(typeof user_id,typeof goods_id,typeof goods_count)
        console.log(typeof user_id)
        const user = await this.dataSource.getRepository(User).findOne({ where: { id: Number(user_id) } });
        const goods = await this.dataSource.getRepository(Goods).findOne({ where: { id: String(goods_id) } });
        console.log(user,goods)
        const cart= this.create({
            user_id: user_id,
            goods_count: goods_count,
            goods_id :goods_id
        })
        // await this.save([{
        //     user_id: user.id,
        //     goods_count: goods_count,
        //     goods_id : goods.id
        // }]);
        await this.save(cart)
        // if (user && goods) {
        //     await this.save([{
        //         user_id: user,
        //         goods_count: goods_count,
        //         goods_id: goods
        //     }]);
        //     return { result: true };
        // } else {
        //     return { result: false, message: 'User or goods not found.' };
        // }

        return {result: true}
    }

    
}