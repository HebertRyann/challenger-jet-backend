import { getCustomRepository, Repository } from "typeorm";
import { Client } from "../entities/Client";
import { ClientRepository } from "../repositories/ClientRepository";
import { Readable } from "stream";
import readLine from 'readline';

class ClientService {
  private clientRepository: Repository<Client>

  constructor() {
    this.clientRepository = getCustomRepository(ClientRepository);
  }

  async create(file: Express.Multer.File) {
    const buffer = file.buffer;
    const readbleFile = new Readable();
    readbleFile.push(buffer);
    readbleFile.push(null);

    const clientsLine = readLine.createInterface({
      input: readbleFile,
    });

    for await(let line of clientsLine) {
      const name = line.split(';')[0];
      const birth_day = line.split(';')[1];
      const value = line.split(';')[2];
      const email = line.split(';')[3];


      const client = this.clientRepository.create({
        name,
        birth_day,
        email,
        value
      });

      await this.clientRepository.save(client);
    }

    return clientsLine;
  }

  async index() {
    const allClients = await this.clientRepository.find();

    return allClients;
  }
}

export { ClientService };