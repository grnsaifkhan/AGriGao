import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UserLogin } from 'src/typeorm/entities/UserLogin';
import { CreateUserParams, LoginHistoryParams, LoginUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {


    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>,
        
        @InjectRepository(UserLogin)
        private loginRepository: Repository<UserLogin>){

    }
    
    fetchUser(){
        return this.userRepository.find();
    }

    async fetchOneUser(condition: any): Promise<User>{
        return this.userRepository.findOne({ where:  [{username: condition}, {password: condition}, {user_id: condition}]  });
    }


    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({
            ...userDetails
        });


        return this.userRepository.save(newUser);
    }


    updateUser(user_id: number, updateUserDetails: UpdateUserParams){
        return this.userRepository.update({user_id}, {...updateUserDetails});
    }

    deleteUser(user_id: number){
        return this.userRepository.delete({user_id})
    }


    createLoginHostory(login_history: LoginHistoryParams){
        const newUserLogin = this.loginRepository.create(
            login_history
        );
        return this.loginRepository.save(newUserLogin);
    }
}
