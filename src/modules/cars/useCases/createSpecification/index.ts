import { SpecificatiosRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationsController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificatiosRepository.getnstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationsController  = new CreateSpecificationsController(
  createSpecificationUseCase
);

export { createSpecificationsController }

