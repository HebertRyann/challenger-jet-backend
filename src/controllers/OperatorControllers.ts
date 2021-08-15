import { Request, Response } from "express";
import { DistributionService } from "../services/DistributionService";
import { OperatorService } from "../services/OperatorService";

class OperatorControllers {

  async create(request: Request, response: Response) {
    const { name } = request.body;
    const operatorService = new OperatorService();
    const distributionService = new DistributionService();
    try {
      const operator = await operatorService.create(name);
      await distributionService.execute();
      return response.json(operator);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  };
  async read(request: Request, response: Response) {
    const operatorService = new OperatorService();
    try {
      const operators = await operatorService.read();
      return response.json(operators);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  };
  async update(request: Request, response: Response) {
    const { name, modification } = request.body;
    const operatorService = new OperatorService();
    try {
      const operator = await operatorService.update(name, modification);
      return response.json(operator);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  };
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const operatorService = new OperatorService();
    try {
      await operatorService.delete(id);
      return response.status(204).json();
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  };
}

export { OperatorControllers };