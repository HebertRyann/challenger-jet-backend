import { ClientRepositoryInMemory } from "../repositories/inmemory/ClientRespositoryInMemory";

describe('Client Controllers', () => {

  it('should be able to create a new client',async () => {
    const clientRepositoryInMemory = new ClientRepositoryInMemory();
    await clientRepositoryInMemory.create({
      name: 'Jonh',
      value: '042',
      email: 'jhondoe@test.com',
      birth_day: '12/10/2002',
    });

    const clients = await clientRepositoryInMemory.index();

    expect(clients).toHaveLength(1);
  })
});