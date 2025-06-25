import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { UsersService } from "./user.services";
import { CreateUserDto } from "./create-user.dto";

@Controller('users')
export class UsersController {
  users: any;
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.users.service.create(dto);
  }

  @Get()
  findAll() {
    return this.users.service.findAll();
  }
}
