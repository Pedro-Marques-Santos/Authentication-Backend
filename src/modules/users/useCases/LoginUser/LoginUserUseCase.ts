import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppErrors';
import { UserToken } from '../../dtos/UserRepositoryDTOS'
import { IUserRepository } from '../../repositories/IUserRepository'

import jwt from 'jsonwebtoken';

@injectable()
class LoginUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(email: string, password: string): Promise<UserToken> {
    
    const emailExist = await this.userRepository.findByEmail(email);
    if(emailExist === false) {
      throw new AppError("E-mail does not exist", 401);
    }

    const userLogin = await this.userRepository.loginUser(email, password);
    if(userLogin.password === false) {
      throw new AppError("Invalid email or password", 401);
    }

    const secretKey = "6392241ff0d34";

    const token = jwt.sign(
      {
        email: userLogin.user.email,
        password: userLogin.user.password,
      },
      secretKey,
      {
        expiresIn: '1h',
        subject: '1'
      }
    );

    const userToken = {
      name: userLogin.user.name,
      token: token
    } as UserToken;
    
    return userToken;
  }

}

export { LoginUserUseCase }