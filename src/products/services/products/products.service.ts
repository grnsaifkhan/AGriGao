import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/typeorm/entities/Product';
import { CreateProductParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ){

    }


    createProduct(productDetails: CreateProductParams){
        const newProduct = this.productRepository.create({
            ...productDetails
        });

        return this.productRepository.save(newProduct);
    }
}
