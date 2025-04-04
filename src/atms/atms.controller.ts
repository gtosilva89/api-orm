import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AtmsService } from './atms.service';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';

@Controller('atms')
export class AtmsController {
  constructor(private readonly atmsService: AtmsService) {}

  @Post()
  async create(@Body() createAtmDto: CreateAtmDto) {
    return await this.atmsService.create(createAtmDto);
  }

  @Get()
  async findAll() {
    return await this.atmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atmsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAtmDto: UpdateAtmDto) {
    return await this.atmsService.update(+id, updateAtmDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.atmsService.remove(+id);
  }
}
