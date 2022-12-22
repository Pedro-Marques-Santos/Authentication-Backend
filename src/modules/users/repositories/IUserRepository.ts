import { IProfileUserDTO, IUserRepositoryDTO, UserVerifyDTO } from "../dtos/UserRepositoryDTOS";
import { User } from "../entities/User";

interface IUserRepository {
  create({name, email, password}: IUserRepositoryDTO): Promise<void>;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<boolean>;
  loginUser(email: string, password: string): Promise<UserVerifyDTO>;
  profileUser(token: string): Promise<IProfileUserDTO>;
}

export { IUserRepository }