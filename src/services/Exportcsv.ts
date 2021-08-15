import { getCustomRepository, Repository } from "typeorm";
import { Client } from "../entities/Client";
import { DistributionRepository } from "../repositories/DistributionRepository";
import { Readable } from "stream";
import readLine from 'readline';
import { write } from 'fast-csv';
import { createWriteStream } from 'fs';
import { Distribution } from "../entities/Distribution";
class Exportcsv {
  private distributionRepository: Repository<Distribution>

  constructor() {
    this.distributionRepository = getCustomRepository(DistributionRepository);
  }

  async execute() {
    const allDistribution = await this.distributionRepository.find();

    const file = createWriteStream('distributions.csv')
    write(allDistribution, { headers: true }).on('end',()=>{}).pipe(file);

    return allDistribution;
  }
}

export { Exportcsv };