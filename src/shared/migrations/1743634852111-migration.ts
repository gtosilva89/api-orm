import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1743634852111 implements MigrationInterface {
  name = 'Migration1743634852111';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "document" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "birth_date" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "phone_number" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "address" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone_number"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birth_date"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "document"`);
  }
}
