import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationsController {
  constructor(private createRepositoryUseCase: CreateSpecificationUseCase) {};

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createRepositoryUseCase.execute({ name, description });
  
    return response.status(201).send();
  }
}

export { CreateSpecificationsController }