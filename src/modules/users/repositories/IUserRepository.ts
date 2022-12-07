import { IUserRepositoryDTO } from "../dtos/UserRepositoryDTOS";
import { User } from "../model/User";

interface IUserRepository {
  create({name, email, password}: IUserRepositoryDTO): void;
  list(): User[];
}

export { IUserRepository }