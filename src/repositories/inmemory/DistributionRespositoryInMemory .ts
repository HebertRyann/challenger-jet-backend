import { Distribution } from "src/entities/Distribution";
import { v4 } from "uuid";

class DistributionRepositoryInMemory {
  distributions: Distribution[] = [];

  async index() {
    return this.distributions
  };

  async execute() {
    this.distributions.push({
      client: 'client 1',
      operator: 'operator 1',
      id: v4()
    })
  }
}

export { DistributionRepositoryInMemory };