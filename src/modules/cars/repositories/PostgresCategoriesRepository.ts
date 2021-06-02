import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
   throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({name, description}: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }

}

export { CategoriesRepository }