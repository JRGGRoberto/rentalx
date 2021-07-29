import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFiles {
  filename: string;
}

class UploadCarImagesController{
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    console.log(id);
    const images = request.files as IFiles[];
    console.log(id);
    console.log(images.length);
  

    const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);

    const images_name = images.map((file) => file.filename);

    await uploadCarImagesUseCase.execute({
      car_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export {UploadCarImagesController}