import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  constructor(private specificatiosRepository: ISpecificationsRepository){}

  execute({ name, description  }: IRequest){
    const AlreadExists = this.specificatiosRepository.findByName(name);
  
    if(AlreadExists) {
      throw new Error("Specification already exists!");
    }
    
    this.specificatiosRepository.create({
      name, 
      description
    });
  }
}

export { CreateSpecificationUseCase }