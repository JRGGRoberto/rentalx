import { Category } from '../model/Category';

// DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category | any;
  list(): Category[];
  create({name, description}: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO }

