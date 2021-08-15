import { EntityRepository, Repository } from 'typeorm';
import { Distribution } from '../entities/Distribution';

@EntityRepository(Distribution)
class DistributionRepository extends Repository<Distribution> {}

export { DistributionRepository };