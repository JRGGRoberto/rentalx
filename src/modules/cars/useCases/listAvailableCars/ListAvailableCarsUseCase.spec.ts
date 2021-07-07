import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe ("List cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  })
  
  it("should be able to list all available cars", async ()=> {

    const car = await carsRepositoryInMemory.create({
      name: "Car", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABC-1234", 
      fine_amount: 60, 
      brand: "Brand", 
      category_id: "category"
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);

  });

  it("should be able to list all available cars by brand", async()=> {
    const car = await carsRepositoryInMemory.create({
      name: "Car1X", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABC-1234", 
      fine_amount: 60, 
      brand: "Car_brand_test", 
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand:"Car_brand_test"
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async()=> {
    const car = await carsRepositoryInMemory.create({
      name: "Car1X2", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABC-12346", 
      fine_amount: 60, 
      brand: "Car_brand_test", 
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name:"Car1X2"
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async()=> {
    const car = await carsRepositoryInMemory.create({
      name: "Car1X2", 
      description: "Description car", 
      daily_rate: 100, 
      license_plate: "ABC-12346", 
      fine_amount: 60, 
      brand: "Car_brand_test", 
      category_id: "Car1X2"
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "Car1X2"
    });
    expect(cars).toEqual([car]);
  });

});