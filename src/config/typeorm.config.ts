import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ['**/*.entity{.ts,.js}'],
  migrations: ['./src/shared/migrations/*.ts'],
  migrationsRun: false,
  synchronize: false,
});

export default AppDataSource;
