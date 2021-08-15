import { Request, Response } from "express";
import { DistributionService } from "../services/DistributionService";
import { Exportcsv } from "../services/Exportcsv";

class DistributionControllers {

  async execute(request: Request, response: Response) {
    const distributionService = new DistributionService();
    try {
      const all = await distributionService.execute();
      return response.json(all);
    } catch (error) {
      return response.json({ error: error.message });
    }
  };

  async index(request: Request, response: Response) {
    const distributionService = new DistributionService();
    try {
      const distributions = await distributionService.index();
      return response.json(distributions);
    } catch (error) {
      return response.json({ error: error.message });
    }
  };

  async export(request: Request, response: Response) {
    const exportcsvService = new Exportcsv();
    try {
      await exportcsvService.execute();

      return response.download('./src/distributions.csv', 'distributions.csv');
    } catch (error) {
      return response.json({ error: error.message });
    }
  };
}

export { DistributionControllers };