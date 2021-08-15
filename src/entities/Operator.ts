import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('operator')
class Operator {

  @PrimaryColumn()
  name: string;

}

export { Operator };