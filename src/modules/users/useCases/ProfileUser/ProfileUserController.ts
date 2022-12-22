import { container } from 'tsyringe';

import { Request, Response } from "express";
import { ProfileUserUseCase } from './ProfileUserUseCase';

class ProfileUserController {

  async handle(request: Request, respose: Response): Promise<Response> {
    const { token } = request.body;

    const profileUseCase = container.resolve(ProfileUserUseCase);

    let tokenData = await profileUseCase.execute(token);

    return respose.json(tokenData)
  }

}

export { ProfileUserController }