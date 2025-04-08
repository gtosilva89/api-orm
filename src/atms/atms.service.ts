import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAtmDto } from './dto/create-atm.dto';
import { UpdateAtmDto } from './dto/update-atm.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Atm } from './entities/atm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AtmsService {
  constructor(
    @InjectRepository(Atm)
    private atmsRepository: Repository<Atm>,
  ) {}

  async create(createAtmDto: CreateAtmDto) {
    return await this.atmsRepository.save({
      ...createAtmDto,
      updated_at: new Date(),
      active: true,
    });
  }

  async findAll() {
    return await this.atmsRepository.find();
  }

  async findOne(id: number) {
    return await this.atmsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateAtmDto: UpdateAtmDto) {
    if (!updateAtmDto.code || !updateAtmDto.location) {
      throw new HttpException(
        'Código ou Localização inválidos',
        HttpStatus.BAD_REQUEST,
      );
    }
    // buscar o registro
    const atm = await this.atmsRepository.findOne({
      where: {
        id,
      },
    });

    if (!atm) {
      throw new HttpException('ATM não encontrado', HttpStatus.NOT_FOUND);
    }
    // atualizar os dados do registro
    const atmUpdated = Object.assign(atm, updateAtmDto);
    // salvar o registro atualizado
    return await this.atmsRepository.save(atmUpdated);
  }

  async remove(id: number) {
    return this.atmsRepository.delete(id);
  }
}
