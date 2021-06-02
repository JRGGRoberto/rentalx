import { request, response, Router } from 'express';

import { listCategoryController } from '../modules/cars/useCases/listCategories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };