import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificatiosnRepository: ISpecificationsRepository 
  ){};
  
  async execute({ name, description  }: IRequest): Promise<void>{
    const AlreadExists = await this.specificatiosnRepository.findByName(name);
    
    if(AlreadExists) {
      throw new Error("Specification already exists!");
    }
    
    await this.specificatiosnRepository.create({
      name, 
      description
    });
  }
}

export { CreateSpecificationUseCase }