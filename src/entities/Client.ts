import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('client')
class Client {
  @PrimaryColumn()
  name: string;

  @Column()
  birth_day: string;

  @Column()
  value: string;

  @Column()
  email: string;
}

export { Client };