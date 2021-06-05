import { SpecificatiosRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListCategoriesController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificatiosRepository = SpecificatiosRepository.getnstance();
const listCategoriesUseCase = new ListSpecificationsUseCase(specificatiosRepository);
const listCategoryController  = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoryController }

