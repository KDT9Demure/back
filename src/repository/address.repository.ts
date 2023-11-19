import { Address } from "src/entity/address.entity";
import { DataSource, EntityRepository, Repository } from "typeorm";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address>{
    constructor(private readonly dataSource:DataSource){
        super(Address, dataSource.createEntityManager());
    }

    
}