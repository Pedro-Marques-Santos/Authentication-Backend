import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppErrors';
import { UserVerifyDTO } from '../../dtos/UserRepositoryDTOS'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class LoginUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(email: string, password: string): Promise<UserVerifyDTO> {
    
    const emailExist = await this.userRepository.findByEmail(email);
    if(emailExist === false) {
      throw new AppError("Email não existe", 401);
    }

    const user = await this.userRepository.loginUser(email, password);
    if(user.exist === false) {
      throw new AppError("Email ou senha invalido", 401);
    }
    
    return user;
  }

}

export { LoginUserUseCase }