import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1743634742562 implements MigrationInterface {
  name = 'Migration1743634742562';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" (
      "id" SERIAL NOT NULL,
      "name" character varying NOT NULL,
      "email" character varying NOT NULL,
      CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "accounts" (
      "id" SERIAL NOT NULL,
      "account_number" integer NOT NULL,
      "agency_number" integer NOT NULL,
      "user_id" integer,
      CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "accounts"
      ADD CONSTRAINT "FK_3000dad1da61b29953f07476324"
      FOREIGN KEY ("user_id")
      REFERENCES "users"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "accounts" DROP CONSTRAINT "FK_3000dad1da61b29953f07476324"`,
    );
    await queryRunner.query(`DROP TABLE "accounts"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
