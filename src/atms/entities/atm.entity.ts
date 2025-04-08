import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('atms')
export class Atm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  location: string;

  @Column()
  active: boolean;

  @Column()
  updated_at: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.atm)
  transactions: Transaction[];
}
