import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOperator1628885612435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'operator',
                columns: [
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('operator');
    }

}
