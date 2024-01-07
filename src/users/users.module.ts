import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserLogin } from 'src/typeorm/entities/UserLogin';
import { Product } from 'src/typeorm/entities/Product';

@Module({
  imports: [
      TypeOrmModule.forFeature([User, UserLogin, Product]), 
      JwtModule.register({
        global: true,
        secret: 'secret', 
        signOptions: {expiresIn: '1d'}
      })
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtService]
})
export class UsersModule {}
