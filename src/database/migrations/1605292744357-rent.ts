import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class rent1605292744357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:'rentedMovies',
          columns:[{
            name:'id',
            type:'varchar',
            isPrimary:true,
            isNullable:false,
          },
          {
            name:'movieId',
            type:'int',
            isNullable:false,
          },
          {
            name:'clientId',
            type:'int',
            isNullable:false,
          },
          {
            name:'rentDate',
            type:'timestamp',
            isNullable:false,
          },
          {
            name:'returnedFilm',
            type:'boolean',
            isNullable:false,
          }
        ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('rentedMovies')
    }

}
