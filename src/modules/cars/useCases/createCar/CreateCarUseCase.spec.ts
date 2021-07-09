import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  }); 

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name Car", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABC-1234", 
      fine_amount: 60, 
      brand: "Brand", 
      category_id: "category"
    })

    expect(car).toHaveProperty("id");
  });

  it("should noto be able to create a car with exists license plate", () => {
    expect(async()=> {
      await createCarUseCase.execute({
        name: "Car", 
        description: "Description car", 
        daily_rate: 100, 
        license_plate: "ABC-1234", 
        fine_amount: 60, 
        brand: "Brand", 
        category_id: "category"
      });

      await createCarUseCase.execute({
        name: "Car2", 
        description: "Description car", 
        daily_rate: 100, 
        license_plate: "ABC-1234", 
        fine_amount: 60, 
        brand: "Brand", 
        category_id: "category"
      });

    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new car with availble true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABD-1234", 
      fine_amount: 60, 
      brand: "Brand", 
      category_id: "category"
    });

    //console.log(car);
    expect(car.available).toBe(true);
  });
});