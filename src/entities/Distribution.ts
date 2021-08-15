import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('distribution')
class Distribution {

  @PrimaryColumn()
  id: string;
  
  @Column()
  operator: string;

  @Column()
  client: string;

}

export { Distribution };