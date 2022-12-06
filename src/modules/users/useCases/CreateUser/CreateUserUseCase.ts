import { inject, injectable } from 'tsyringe'
import { IUserRepositoryDTO } from '../../dtos/UserRepositoryDtos'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  execute({ name, password, email }: IUserRepositoryDTO): void {

    this.userRepository.create({ name, email, password });

  }

}

export { CreateUserUseCase }