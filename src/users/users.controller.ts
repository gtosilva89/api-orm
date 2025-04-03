import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    const response = await this.usersService.create(user);
    return response;
  }

  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }
}
