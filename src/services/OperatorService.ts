import { getCustomRepository, Repository } from "typeorm";
import { Operator } from "../entities/Operator";
import { Distribution } from "../entities/Distribution";
import { OperatorRepository } from "../repositories/OperatorRepository";
import { DistributionRepository } from "../repositories/DistributionRepository";

class OperatorService {
  private operatorRepository: Repository<Operator>
  private distributionRepository: Repository<Distribution>

  constructor() {
    this.operatorRepository = getCustomRepository(OperatorRepository);
    this.distributionRepository = getCustomRepository(DistributionRepository);
    
  }
  async create(name: string) {
    const findOperator = await this.operatorRepository.findOne({
      where: {
        name,
      }
    });
    if(findOperator) {
      throw new Error('This name operator already use');
    }
    const operator = this.operatorRepository.create({
      name
    });

    await this.operatorRepository.save(operator);

    return operator;
  }
  async read() {
    const findOperator = await this.operatorRepository.find();

    return findOperator;
  }
  async update(name: string, modification: string) {
    const findOperator = await this.operatorRepository.findOne({
      where: {
        name,
      }
    });
    const findDuplicate = await this.operatorRepository.findOne({
      where: {
        name: modification,
      }
    });

    if(!findOperator) {
      throw new Error('This name operator not found');
    }

    if(findDuplicate) {
      throw new Error('This modification already use from another operator');
    }

    const operator = await this.operatorRepository.update({
      name
    }, {
      name: modification
    });

    // const allDistributions = await this.distributionRepository.find({
    //   where: {
    //     operator: name.toLowerCase()
    //   }
    // });

    return operator;
  }
  async delete(id: string) {
    const findOperator = await this.operatorRepository.findOne({
      where: {
        name: `operator ${id}`,
      }
    });
    if(!findOperator) {
      throw new Error('This name operator not found');
    }

    await this.operatorRepository.delete({
      name: `operator ${id}`
    });

    return;
  }
}

export { OperatorService };