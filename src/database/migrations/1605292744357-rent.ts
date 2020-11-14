import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class rent1605292744357 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rentedMovies',
        columns: [{
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'movieId',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'clientId',
          type: 'varchar',
          isNullable: false,

        },
        {
          name: 'rentDate',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'returnedFilm',
          type: 'boolean',
          isNullable: false,
        }
        ]
      }));

    await queryRunner.createForeignKey('rentedMovies', new TableForeignKey({
      columnNames: ['clientId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rentedMovies', true, true, true)
  }

}
