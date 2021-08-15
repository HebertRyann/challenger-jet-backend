import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateDistributionTable1628902858349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'distribution',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isNullable: false,
                        isPrimary: true
                    },
                    {
                        name: 'operator',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'client',
                        type: 'varchar',
                        isNullable: false,
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            'distribution',
            new TableForeignKey(
                
                {
                    name: 'FK_Operator',
                    columnNames: ['operator'],
                    referencedColumnNames: ['name'],
                    referencedTableName: "operator",
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('distribution', 'FK_Operator');
        await queryRunner.dropTable('distribution');
    }

}
