import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      autoLoadEntities: true,
      synchronize: false,
      migrations: ['./src/shared/migrations/*.ts'],
    }),
    UsersModule,
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
