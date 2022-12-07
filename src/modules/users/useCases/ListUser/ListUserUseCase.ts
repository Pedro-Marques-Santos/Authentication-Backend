import { inject, injectable } from 'tsyringe'
import { User } from '../../model/User';
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
class ListUserUseCase {

  constructor(
    @inject("UserRepository")
    private useRepository: IUserRepository
  ) { }

  execute(): User[] {
    const list = this.useRepository.list();
    return list;
  }

}

export { ListUserUseCase }