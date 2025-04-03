import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'bank',
  entities: ['**/*.entity{.ts,.js}'],
  migrations: ['./src/shared/migrations/*.ts'],
  migrationsRun: false,
  synchronize: true,
});

export default AppDataSource;
