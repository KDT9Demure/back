import { DataSource, EntityRepository, Repository } from "typeorm";
import { Order } from "src/entity/order.entity";

@EntityRepository(Order)
export class OrderRepository extends Repository<Order>{
    constructor(private readonly dataSource:DataSource){
        super(Order, dataSource.createEntityManager());
    }

    async createOrder(orderArray:[]){
        try{
            const id = await this.find({order:{id:'DESC'}, take:1});
            for(let i = 0; i<orderArray.length; i++){
                const { goods_id, address, payment_type, goods_count, user_id, delivery_memo, delivery_date, delivery_status, amount, price } = orderArray[i];
                
                const order = this.create({
                    id:id[0].id+1,
                    goods_id,
                    address,
                    payment_type,
                    goods_count,
                    user_id,
                    delivery_memo,
                    delivery_date,
                    delivery_status,
                    create_date:new Date(),
                    amount,
                    price,
                    order_count:i,
                })
        
                await this.save(order);
                    
            }
        }catch(err){
            console.log(err);
        }

        return true;
    }
}