import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeingKeyToDistribution1628941936093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'distribution',
            new TableForeignKey(
                
                {
                    name: 'FK_Client',
                    columnNames: ['client'],
                    referencedColumnNames: ['name'],
                    referencedTableName: "client",
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('distribution', 'FK_Client');
    }

}
