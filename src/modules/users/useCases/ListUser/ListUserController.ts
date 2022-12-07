import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {

  handle(request: Request, respose: Response): Response {
    
    const listUserUseCase = container.resolve(ListUserUseCase);

    const list =listUserUseCase.execute();

    return respose.json(list);
  }

}

export { ListUserController }