import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class Movies1605122908465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'movies',
          columns:[
            {
              name:'id',
              type:'varchar',
              isPrimary: true,
            },
            {
              name: 'title',
              type: 'varchar',
              isNullable:false,
            },
            {
              name: 'director',
              type: 'varchar',
              isNullable:false,
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('movies')
    }

}
