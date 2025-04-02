import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1743554692308 implements MigrationInterface {
    name = 'Migration1743554692308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "document" varchar NOT NULL, "birth_date" datetime NOT NULL, "phone_number" varchar NOT NULL, "address" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "email") SELECT "id", "name", "email" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "email") SELECT "id", "name", "email" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
    }

}
