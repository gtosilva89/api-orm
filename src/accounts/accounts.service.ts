import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    // buscar no repository do user se existe um user com o id que vem na request
    const user = await this.usersRepository.findOne({
      where: {
        id: createAccountDto.user_id,
      },
    });
    // se existir, passar o user no objeto que será salvo no banco
    if (!user) {
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    }
    return await this.accountsRepository.save({ ...createAccountDto, user });
  }

  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
