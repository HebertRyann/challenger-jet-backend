import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

class ClientControllers {

  async create(request: Request, response: Response) {
    const clientService = new ClientService();
    const { file } = request;
    try {
      if(!file) throw new Error('This route need file csv');
      await clientService.create(file);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  };
  async index(request: Request, response: Response) {
    const clientService = new ClientService();
    try {
      const allClients = await clientService.index();
      return response.json({ clients: allClients });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  };
}

export { ClientControllers };