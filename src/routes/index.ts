import { Router, Request, Response } from "express";
import multer from "multer";
import { ClientControllers } from "../controllers/ClientControllers";
import { OperatorControllers } from "../controllers/OperatorControllers";
import { DistributionControllers } from "../controllers/DistributionControllers";

const multerConfig = multer();
const routes = Router();

const operatorControllers = new OperatorControllers();
const clientControllers = new ClientControllers();
const distributionControllers = new DistributionControllers();

routes.get('/operator', operatorControllers.read);
routes.post('/operator', operatorControllers.create);
routes.put('/operator', operatorControllers.update);
routes.delete('/operator/:id', operatorControllers.delete);

routes.get('/clients', clientControllers.index);
routes.post('/clients', multerConfig.single('file'), clientControllers.create);

routes.get('/distribution', distributionControllers.execute);
routes.get('/distribution/list', distributionControllers.index);
routes.get('/distribution/export', distributionControllers.export);

export { routes };