import { Router } from 'express';

import { CreateSpecificationsController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';


const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post(
  "/",
  ensureAdmin,
  createSpecificationsController.handle
);

export { specificationsRoutes };
