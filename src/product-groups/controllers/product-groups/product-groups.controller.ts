import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductGroupDto } from 'src/product-groups/dto/CreateProductGroup.dto';
import { ProductGroupsService } from 'src/product-groups/services/product-groups/product-groups.service';

@Controller('product-groups')
export class ProductGroupsController {

    constructor(private productGroupsService: ProductGroupsService){}

    @Post('createProductGroup')
    createProductGroup(@Body() createProductGroups: CreateProductGroupDto){
        this.productGroupsService.createProductGroup(createProductGroups);

        return "Product Group Created Successfully"
    }
}
