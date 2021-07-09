import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase  } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specification", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory()
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory, specificationRepositoryInMemory
    )
  });

  it("should not be able to add a new specification to a now-existent car", ()=>{
    expect(async ()=> {
      const car_id = "1234";
      const specifications_id = ["54321"]
      await createCarSpecificationUseCase.execute({car_id, specifications_id});
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async ()=>{

    const car = await carsRepositoryInMemory.create({
      name: "Car2", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABC-1234", 
      fine_amount: 60, 
      brand: "Brand", 
      category_id: "category"
    });

    const specification = await specificationRepositoryInMemory.create({
      name: "Name SpecTeste",
      description: "Descript Spec Teste"
    });

    const specification2 = await specificationRepositoryInMemory.create({
      name: "Name SpecTeste2",
      description: "Descript Spec Teste2"
    });

    const specifications_id = [specification.id, specification2.id];
    
    const specificationsCar = await createCarSpecificationUseCase.execute({
      car_id: car.id, 
      specifications_id
    });

    expect(specificationsCar).toHaveProperty("specifications")
    expect(specificationsCar.specifications.length).toBe(2)
  });
})