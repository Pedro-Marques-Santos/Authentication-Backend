import { IUserRepositoryDTO, UserVerifyDTO } from "../../dtos/UserRepositoryDTOS";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

import { getRepository, Repository } from "typeorm"

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getRepository(User)
  }

  async create({ name, email, password }: IUserRepositoryDTO): Promise<void> {
    const user = this.userRepository.create({
      name,
      email,
      password
    });

    await this.userRepository.save(user);
  }

  async list(): Promise<User[]> {
    const list = await this.userRepository.find();
    return list;
  }

  async findByEmail(email: string): Promise<boolean> {
    let exist = false;
    const list = await this.userRepository.find();
    list.map((user) => {
      if(user.email === email) {
        exist = true;
      }
    });
    return exist;
  }

  async loginUser(email: string, password: string): Promise<UserVerifyDTO> {

    let userVerify = {
      password: false
    } as UserVerifyDTO;

    const users = await this.userRepository.find();
    users.map((user) => {
      if(user.email === email && user.password === password) {
        userVerify = {
          ...userVerify,
          password: true,
          user: user
        }
      }
    });

    return userVerify
  }

}

export { UserRepository }