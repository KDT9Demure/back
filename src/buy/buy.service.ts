import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from 'src/repository/address.repository';
import { OrderRepository } from 'src/repository/order.repository';
import { AddressCredentialDto } from './dto/address.credential.dto';
import { AddressUpdateCredentialDto } from './dto/address-update.credential.dto';
import { GoodsRepository } from 'src/repository/goods.repository';
import { GoodsGetCredentialDto } from './dto/goods-get.credential.dto';
import { AddressGetCredentialDto } from './dto/address-get.credential.dto';
import { D_payRepository } from 'src/repository/d_pay.repository';
import { DpayCredentialDto } from './dto/dpay.credential.dto';
import { DpayDeleteCredentialDto } from './dto/dpay-delete.credential.dto';
import {UserRepository} from "../repository/user.repository";
import {User} from "../entity/user.entity";
import { CartRepository } from 'src/repository/cart.repository';


@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(OrderRepository)
        private readonly orderRepository:OrderRepository,

        @InjectRepository(AddressRepository)
        private readonly addressRepository:AddressRepository,

        @InjectRepository(GoodsRepository)
        private readonly goodsRepository:GoodsRepository,

        @InjectRepository(D_payRepository)
        private readonly d_payRepository:D_payRepository,
         
        @InjectRepository(UserRepository)
        private readonly userRepository:UserRepository,

        @InjectRepository(CartRepository)
        private readonly cartRepository:CartRepository,

    ){}

    async getGoods(goodsGetCredentialDto:GoodsGetCredentialDto):Promise<object>{
        let arr = [];
        try{
            const {cart_ids} = goodsGetCredentialDto;
            let temp = cart_ids.split(',');
            
            for(let i = 0; i < temp.length; i++){
                const carts =  await this.cartRepository.findOne({where:{id:Number(temp[i])}});
                arr.push(carts);
            }
        }catch(err){
            console.log(err);
        }
        return {result:true, data:arr};
    }

    async getAddress(addressGetCredentialDto:AddressGetCredentialDto):Promise<object>{

        const {user_id} = addressGetCredentialDto;
        let address = [];
        try{
            address =  await this.addressRepository.find({where:{user_id}});
        }catch(err){
            console.log(err);
        }
        return {result:true, data:address}
    }

    async createOrder(orderArray:[]){
        try{
            let order;
            let usePoint = 0;
            const id = await this.orderRepository.find({order:{id:'DESC'}, take:1});
            for(let i = 0; i<orderArray.length; i++){
                const { goods_id, address, payment_type, goods_count, user_id, delivery_memo, delivery_date, delivery_status, amount, price,use_point } = orderArray[i];
                order = this.orderRepository.create({
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
                usePoint = use_point
                await this.orderRepository.save(order);
                const cartDelete = await this.cartRepository
                    .delete({goods_id:goods_id,user_id:user_id})
            }
            const userP = await this.userRepository.findOne({where:{id:order.user_id}})
            const userPoint = await this.userRepository.update({id:order.user_id},{point:(order.amount/20)+userP.point-usePoint})
        }catch(err){
            console.log(err);
        }
        return true;
    }

    async createAddress(addressCredentialDto:AddressCredentialDto){
        this.addressRepository.createAddress(addressCredentialDto);
    }

    async updateAddress(addressUpdateCredentialDto:AddressUpdateCredentialDto){
        const {detail, address, address_name, user_id, zip_code, id} = addressUpdateCredentialDto;

        try{
            const address_res = await this.addressRepository.update(id, {detail, address, address_name, user_id, zip_code});
            console.log(address_res);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }

    async deleteAddress(id:number){
        try{
            const address_res = await this.addressRepository.delete(id);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
        }
    }

    async createDpay(dpayCredentialDto:DpayCredentialDto){
        return this.d_payRepository.createDpay(dpayCredentialDto);
    }

    async getDpay(user:number){
        console.log(user);
        try{
            const dpay = await this.d_payRepository.find({where:{user_id:user}});
            return {result:true, dpay}
        }catch(err){
            console.log(err);
            return {result:false}
        }
        
    }

    async deleteDpay(dpayDeleteCredentialDto:DpayDeleteCredentialDto){
        const {id} = dpayDeleteCredentialDto;
        try{
            const dpay = await this.d_payRepository.delete(id);
            return {result:true}
        }catch(err){
            console.log(err);
            return {result:false}
            
        }
    }

    async updateDefaultAddress(id:number):Promise<object>{
        try {
            const defaultAddress = this.addressRepository.update({id:id},{default_address:true})
            return {result:true}
        }catch (e) {
            console.log(e)
            return {result:false}
        }

    }
    
}
