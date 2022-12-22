import { inject, injectable } from 'tsyringe'
import { IProfileUserDTO } from '../../dtos/UserRepositoryDTOS';
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class ProfileUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute(token: string): Promise<IProfileUserDTO> {

    let tokenData = await this.userRepository.profileUser(token);

    return tokenData;

  }

}

export { ProfileUserUseCase }