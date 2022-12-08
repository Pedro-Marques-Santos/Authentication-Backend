import { inject, injectable } from 'tsyringe'
import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class ListUserUseCase {

  constructor(
    @inject("UserRepository")
    private useRepository: IUserRepository
  ) { }

  async execute(): Promise<User[]> {
    const list = await this.useRepository.list();
    return list;
  }

}

export { ListUserUseCase }