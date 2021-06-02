import { Specification } from '../model/Specification';
import { ICreateSpecificationDTO } from './ISpecificationsRepository';

class SpecificatiosRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ description, name}: ICreateSpecificationDTO): void {
    const specification = new Specification();
  
    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specification.push(specification);
  }

  list(): Specification[] {
    return this.specification;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specification.find((specification) => specification.name === name);
    return specification;
  }
}

export { SpecificatiosRepository }