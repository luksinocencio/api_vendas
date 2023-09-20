import { DataSource } from 'typeorm';

const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: ['./src/modules/**/typeorm/entities/*.ts'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  logging: true,
  synchronize: true,
});

export default myDataSource;
