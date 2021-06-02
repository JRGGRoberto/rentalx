import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({ name, description  }: IRequest){
    const AlreadExists = this.categoriesRepository.findByName(name);

    if(AlreadExists) {
      throw new Error("Specification already exists!");
    }
    
    this.categoriesRepository.create({name, description});

  }
}

export { CreateCategoryService }