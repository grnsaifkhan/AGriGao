import { Module } from '@nestjs/common';
import { ProductGroupsController } from './controllers/product-groups/product-groups.controller';
import { ProductGroupsService } from './services/product-groups/product-groups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductGroup } from 'src/typeorm/entities/ProductGroup';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductGroup])
  ],
  controllers: [ProductGroupsController],
  providers: [ProductGroupsService]
})
export class ProductGroupsModule {}
