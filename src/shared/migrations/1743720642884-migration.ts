import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1743720642884 implements MigrationInterface {
  name = 'Migration1743720642884';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "atms" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "location" character varying NOT NULL, "active" boolean NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_c63c42c490afb8f654040f37742" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "atms"`);
  }
}
