import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1743726972877 implements MigrationInterface {
  name = 'Migration1743726972877';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transactions" (
        "id" SERIAL NOT NULL,
        "type" character NOT NULL,
        "amount" double precision NOT NULL,
        "account_id" integer,
        "atm_id" integer,
        CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9"
        PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `ALTER TABLE "transactions"
      ADD CONSTRAINT "FK_49c0d6e8ba4bfb5582000d851f0"
      FOREIGN KEY ("account_id")
      REFERENCES "accounts"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transactions"
      ADD CONSTRAINT "FK_6ba3d0f69796a22bd5ed6f4f2a9"
      FOREIGN KEY ("atm_id")
      REFERENCES "atms"("id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transactions"
      DROP CONSTRAINT "FK_6ba3d0f69796a22bd5ed6f4f2a9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transactions"
      DROP CONSTRAINT "FK_49c0d6e8ba4bfb5582000d851f0"`,
    );
    await queryRunner.query(`DROP TABLE "transactions"`);
  }
}
