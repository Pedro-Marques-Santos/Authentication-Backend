import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {

  async handle(request: Request, respose: Response): Promise<Response> {
    
    const listUserUseCase = container.resolve(ListUserUseCase);

    const list = await listUserUseCase.execute();

    return respose.json(list);
  }

}

export { ListUserController }