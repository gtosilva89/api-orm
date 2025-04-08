import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { Atm } from 'src/atms/entities/atm.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    @InjectRepository(Atm)
    private atmRepository: Repository<Atm>,
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    // validar se existe a conta
    const account = await this.accountRepository.findOne({
      where: { id: createTransactionDto.account_id },
    });
    if (!account) {
      throw new HttpException('Conta não encontrada', HttpStatus.NOT_FOUND);
    }
    // validar se existe o caixa
    const atm = await this.atmRepository.findOne({
      where: { id: createTransactionDto.atm_id },
    });
    if (!atm) {
      throw new HttpException('Caixa não encontrado', HttpStatus.NOT_FOUND);
    }

    // validar se existe o valor é maior que zero
    if (createTransactionDto.amount === 0) {
      throw new HttpException(
        'Valor não pode ser zero.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.transactionRepository.save({
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
      account,
      atm,
    });
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
