import { ICreateRentalDTO } from "../dtos/IcreateRentalDTO"
import { Rental } from "../intra/typeorm/enteties/Rental"

interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create(data: ICreateRentalDTO): Promise<Rental>;
} 

export { IRentalsRepository }