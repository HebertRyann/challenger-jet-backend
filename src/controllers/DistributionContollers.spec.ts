import { DistributionRepositoryInMemory } from "../repositories/inmemory/DistributionRespositoryInMemory ";

describe('Distribution Controllers', () => {

  it('should be able to create a new client',async () => {
    const distributionRepositoryInMemory = new DistributionRepositoryInMemory();
    await distributionRepositoryInMemory.execute();

    const distributions = await distributionRepositoryInMemory.index();

    expect(distributions).toHaveLength(1);
  })
});