import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { UserLogin } from './typeorm/entities/UserLogin';
import { Product } from './typeorm/entities/Product';
import { ProductsModule } from './products/products.module';
import { ProductGroup } from './typeorm/entities/ProductGroup';
import { ProductGroupsModule } from './product-groups/product-groups.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'agrigao',
      entities: [User, UserLogin, Product, ProductGroup],
      synchronize: true
    }),
    UsersModule,
    ProductsModule,
    ProductGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
