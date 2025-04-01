import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_number: number;

  @Column()
  agency_number: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: number;
}
