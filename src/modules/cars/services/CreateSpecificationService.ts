import { SpecificatiosRepository } from '../repositories/SpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificatiosRepository: SpecificatiosRepository){}

  execute({ name, description  }: IRequest){
    const AlreadExists = this.specificatiosRepository.findByName(name);
  
    if(AlreadExists) {
      //return response.status(400).json({ error: "Category already exists!"})
      throw new Error("Specification already exists!");
    }
    
    this.specificatiosRepository.create({name, description});

  }
}

export { CreateSpecificationService }