import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;
}
