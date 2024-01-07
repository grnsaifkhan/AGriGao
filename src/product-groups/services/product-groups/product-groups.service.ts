import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductGroup } from 'src/typeorm/entities/ProductGroup';
import { CreateProductGroupParam } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductGroupsService {
    constructor(
        @InjectRepository(ProductGroup)
        private productGroupRepository: Repository<ProductGroup>
    ){

    }

    createProductGroup(productGroupDetails: CreateProductGroupParam){
        const newProductGroup = this.productGroupRepository.create({
            ...productGroupDetails
        })


        return this.productGroupRepository.save(newProductGroup);
    }
}
