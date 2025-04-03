import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { AtmsModule } from './atms/atms.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'bank',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    AccountsModule,
    AtmsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
