import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListSpecificationsUseCase){}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };