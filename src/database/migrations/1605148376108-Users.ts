import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1605148376108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name:'users',
          columns:[
            {
              name:'id',
              type:'varchar',
              isPrimary:true,
              isNullable:false,
            },
            {
              name:'name',
              type:'varchar',
              isNullable: false,
            },
            {
              name:'email',
              type:'varchar',
              isNullable: false,
            },
            {
              name:'password',
              type:'varchar',
              isNullable: false,
            },
          ]

        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users')
    }

}
