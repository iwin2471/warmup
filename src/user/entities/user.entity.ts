import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tags } from './tags.entity';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  email: string;

  @Column({type: 'varchar', length: 30})
  name: string;

  @Column({type: 'varchar'})
  password: string;


  @ManyToMany(() => Tags)
  @JoinTable()
  tags: Tags[];

}
