import { DpayCredentialDto } from "src/buy/dto/dpay.credential.dto";
import { D_pay } from "src/entity/d_pay.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(D_pay)
export class D_payRepository extends Repository<D_pay>{
    constructor(private readonly dataSource:DataSource){
        super(D_pay, dataSource.createEntityManager());

    }

    async createDpay(dpayCredentialDto:DpayCredentialDto){
        const {user_id, bank_name, card_number} = dpayCredentialDto;

        try{
            const dpay = this.create({user_id, bank_name, card_number})
            await this.save(dpay);
            const user_dpay = await this.find({where:{user_id}});
            return {result:true, dpay:user_dpay}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }
}