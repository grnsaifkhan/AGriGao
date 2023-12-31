import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, Req, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { LoginUserDto } from 'src/users/dto/LoginUser.dto';
import { UpdateUserDto } from 'src/users/dto/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {


    constructor(private usersService: UsersService, private jwtService: JwtService){
        
    }

    @Get()
    async getUser(){
        const users = this.usersService.fetchUser();
        return users;
    }


    @Post('register')
    createUser(@Body() createUserDto: CreateUserDto){
        this.usersService.createUser(createUserDto);
        return "User created successfully";
    }


    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
        await this.usersService.updateUser(id, updateUserDto);
    }


    @Delete('delete/:id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.usersService.deleteUser(id);
    }


    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto, @Res({passthrough: true}) response: Response){
        const userName = loginUserDto.username;
        const password = loginUserDto.password;
        const user = await this.usersService.fetchOneUser(userName);


        if(!user){
            throw new BadRequestException();
        }

        const passwordStored = await this.usersService.fetchOneUser(password);
        if(!passwordStored){
            throw new BadRequestException();
        }

        const jwt = await this.jwtService.signAsync({id: user.user_id}, {secret: 'secret'});

        const user_id = user.user_id;
        this.usersService.createLoginHostory({user_id});


        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success'
        };
    }


    @Get('user')
    async user(@Req() request: Request){
        try{        
            const cookies = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookies, {secret: 'secret'});

            if(!data){
                throw new UnauthorizedException();
            }

            const user = await this.usersService.fetchOneUser(data['id']);

            const {password, ...result} = user;

            return result;
        } catch (e){
            throw new UnauthorizedException();
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');

        return{
            message: 'success'
        }
    }
}
