import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Endpoint Validation')
@Controller('endpointValidation')
export class EndpointValidationController {
  constructor() {}

  @Get('/')
  findOne(
    @Query('id', ParseIntPipe) id: number,
    @Query('name', ValidationPipe) name: string,
  ) {
    return `This action returns a user with id: ${id} and name: ${name}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
