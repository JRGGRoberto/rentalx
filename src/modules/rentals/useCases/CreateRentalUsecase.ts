import { AppError } from "@shared/errors/AppError";
import { Rental } from "../intra/typeorm/enteties/Rental";
import { IRentalsRepository } from "../repositories/IRentalsReopsitory";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {

  constructor(private rentalsRepository: IRentalsRepository){};

  async execute({ 
    user_id, 
    car_id, 
    expected_return_date
  }: IRequest): Promise<Rental>{
    //   Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para um mesmo usuário  
    const carUnaAvailable = await this.rentalsRepository.findOpenRentalByCar(car_id);
    if (carUnaAvailable){
      throw new AppError("Car is unavailable");
    }

    //   Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para um mesmo carro
    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);
    if (rentalOpenToUser){
      throw new AppError("There's a rental in progress for user!");
    }

    //   O aluguel deve ter duração mínima de 24 horas
    
    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date
    });

    return rental;
  }
}

export {CreateRentalUseCase }