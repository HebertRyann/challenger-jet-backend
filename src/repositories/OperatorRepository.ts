import { EntityRepository, Repository } from 'typeorm';
import { Operator } from '../entities/Operator';

@EntityRepository(Operator)
class OperatorRepository extends Repository<Operator> {}

export { OperatorRepository };