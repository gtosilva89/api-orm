import { Account } from 'src/accounts/entities/account.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  document: string;

  @Column()
  birth_date: Date;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @Column()
  active: boolean;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];
}
