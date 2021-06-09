import { Router } from 'express';

import { createSpecificationsController } from '../modules/cars/useCases/createSpecification';
import { listCategoryController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { specificationsRoutes };