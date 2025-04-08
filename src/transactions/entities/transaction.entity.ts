import { Account } from 'src/accounts/entities/account.entity';
import { Atm } from 'src/atms/entities/atm.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.transactions)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @ManyToOne(() => Atm, (atm) => atm.transactions)
  @JoinColumn({ name: 'atm_id' })
  atm: Atm;

  @Column({
    type: 'char',
  })
  type: 'C' | 'D';

  @Column({
    type: 'double precision',
  })
  amount: number;
}
