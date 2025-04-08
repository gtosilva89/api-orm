import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { Atm } from 'src/atms/entities/atm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Account, Atm])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
