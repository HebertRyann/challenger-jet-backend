import { getCustomRepository, Repository } from "typeorm";
import { Distribution } from "../entities/Distribution";
import { Operator } from "../entities/Operator";
import { Client } from "../entities/Client";
import { DistributionRepository } from "../repositories/DistributionRepository";
import { OperatorRepository } from "../repositories/OperatorRepository";
import { ClientRepository } from "../repositories/ClientRepository";
import { v4 } from "uuid";

class DistributionService {
  private distributionRepository: Repository<Distribution>
  private operatorRepository: Repository<Operator>
  private clientRepository: Repository<Client>

  constructor() {
    this.distributionRepository = getCustomRepository(DistributionRepository);
    this.operatorRepository = getCustomRepository(OperatorRepository);
    this.clientRepository = getCustomRepository(ClientRepository);
  }
  async execute() {
    const allOperators = await this.operatorRepository.find();
    const allClients = await this.clientRepository.find();
    const operatorsID = allOperators.map(operator => operator.name.split(' ')[1]);
    // const clientsID = allOperators.map(client => client.name.split(' ')[1]);
    operatorsID.map(operator => {
      allClients.map(async client => {
        const findDistribution = await this.distributionRepository.findOne({
          where: {
            operator: `operator ${operator}`,
            client: client.name
          }
        })
        if(findDistribution) {
          return;
        }
        if(operatorsID.length === 1) {
          const distribution = this.distributionRepository.create({
            id: v4(),
            operator: `operator ${operator}`,
            client: client.name
          });

          await this.distributionRepository.save(distribution);
          return;
        }
        if(client.name.includes(operator)) {
          
          const findDistribution = await this.distributionRepository.findOne({
            where: {
              operator: `operator ${operator}`,
              client: client.name
            }
          })
          if(findDistribution) {
            return;
          }
          
          const findandReDistribution = await this.distributionRepository.findOne({
            where: {
              client: client.name
            }
          });

          if(findandReDistribution) {
            await this.distributionRepository.update({
              client: client.name
            }, {
              operator: `operator ${operator}`
            })
            return;
          }

          const distribution = this.distributionRepository.create({
            id: v4(),
            operator: `operator ${operator}`,
            client: client.name
          });

          await this.distributionRepository.save(distribution);
        }

        if(Number(operatorsID[operatorsID.length - 1]) / operatorsID.length === 1) {
          if(client.name.includes(`${Number(operatorsID[operatorsID.length - 1]) + Number(operator)}`)){
            const findDistribution = await this.distributionRepository.findOne({
              where: {
                operator: `operator ${operator}`,
                client: client.name
              }
            });
  
            if(findDistribution) {
              return;
            };

            const findandReDistribution = await this.distributionRepository.findOne({
              where: {
                client: client.name
              }
            });
  
            if(findandReDistribution) {
              await this.distributionRepository.update({
                client: client.name
              }, {
                operator: `operator ${operator}`
              })
              return;
            }
  
            const distribution = this.distributionRepository.create({
              id: v4(),
              operator: `operator ${operator}`,
              client: client.name
            });

            await this.distributionRepository.save(distribution);
          }
        } else {
          const verifyIndex = operatorsID.findIndex((operator, index) => Number(operator) / (index + 1) !== 1);
          if(client.name.includes(`${Number(operatorsID[verifyIndex]) + Number(operator)}`)){
            const findDistribution = await this.distributionRepository.findOne({
              where: {
                operator: `operator ${operator}`,
                client: client.name
              }
            });
  
            if(findDistribution) {
              return;
            };

            const findandReDistribution = await this.distributionRepository.findOne({
              where: {
                client: client.name
              }
            });
  
            if(findandReDistribution) {
              await this.distributionRepository.update({
                client: client.name
              }, {
                operator: `operator ${operator}`
              })
              return;
            }
  
            const distribution = this.distributionRepository.create({
              id: v4(),
              operator: `operator ${operator}`,
              client: client.name
            });

            await this.distributionRepository.save(distribution);
          }
        }
      })
    });
    
    return;
  }
  async index() {
    const distributions = await this.distributionRepository.find();
    return distributions;
  }
}

export { DistributionService };