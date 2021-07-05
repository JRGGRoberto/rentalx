import { Router } from 'express';

import { CreateSpecificationsController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const specificationsRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationsController.handle);

export { specificationsRoutes };
