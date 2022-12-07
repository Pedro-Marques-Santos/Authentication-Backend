import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1670418842681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table(
          {
            name: "user",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true
              },
              {
                name: "name",
                type: "varchar"
              },
              {
                name: "email",
                type: "varchar"
              },
              {
                name: "password",
                type: "varchar"
              }
            ]
          }
        )
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("user")
    }

}
