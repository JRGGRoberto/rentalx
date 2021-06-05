import { Specification } from '../../model/Specification';
import { 
  ICreateSpecificationDTO, 
  ISpecificationsRepository 
} from '../ISpecificationsRepository';

class SpecificatiosRepository implements ISpecificationsRepository{
  private specification: Specification[];

  private static INSTANCE: SpecificatiosRepository;

  constructor() {
    this.specification = [];
  }

  public static getnstance(): SpecificatiosRepository {
    if(!SpecificatiosRepository.INSTANCE){
      SpecificatiosRepository.INSTANCE = new SpecificatiosRepository();
    }
    return SpecificatiosRepository.INSTANCE;
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