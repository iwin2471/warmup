import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 30})
  name: String;

  @Column({type: 'varchar'})
  password: String;

}
