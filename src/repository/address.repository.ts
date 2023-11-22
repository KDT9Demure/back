import { AddressCredentialDto } from "src/buy/dto/address.credential.dto";
import { Address } from "src/entity/address.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{
    constructor(private readonly dataSource:DataSource){
        super(Address, dataSource.createEntityManager());
    }

    async createAddress(addressCredentialDto:AddressCredentialDto){

        const { address, detail, zip_code, user_id, address_name } = addressCredentialDto;

        try{
            const address_res = this.create({address, detail, zip_code, user_id, address_name});
            await this.save(address_res);

            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }
}