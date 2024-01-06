import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/CreateProduct.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){

    }


    @Post('createProduct')
    createProduct(@Body() createProductDto: CreateProductDto){
        this.productsService.createProduct(createProductDto);

        return 'product created successfully'
    }

}
