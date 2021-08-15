import { Client } from "src/entities/Client";

class ClientRepositoryInMemory {
  clients: Client[] = [];

  async index() {
    return this.clients
  };

  async create({ 
    birth_day, 
    email,
    name, 
    value 
  }: Client) {
    this.clients.push({
      name,
      birth_day,
      email,
      value
    })

  }
}

export { ClientRepositoryInMemory };