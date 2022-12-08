import { container } from 'tsyringe'

import { Request, Response } from "express"

import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginUserUseCase = container.resolve(LoginUserUseCase);

    const user = await loginUserUseCase.execute(email, password);

    return response.json(user);
  }

}

export { LoginUserController }