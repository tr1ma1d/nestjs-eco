import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
  
  @Get('get')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Post('sign-in')
  async loginUser(@Body() data: LoginUserDto) {
    return await this.usersService.login(data);
  }

  @Post('sign-up')
  async createUser(@Body() data: CreateUserDto) {
    return await this.usersService.create(data);
  }
}
