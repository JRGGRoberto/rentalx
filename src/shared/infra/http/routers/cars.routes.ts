import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsUseController } from '@modules/cars/useCases/listAvailableCars/listAvailableCarsController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsUseController = new ListAvailableCarsUseController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
  "/", 
  ensureAuthenticated, 
  ensureAdmin, 
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsUseController.handle);

carsRoutes.post(
  "/specifications/:id", 
  ensureAuthenticated, 
  ensureAdmin, 
  createCarSpecificationController.handle
);

export { carsRoutes };
