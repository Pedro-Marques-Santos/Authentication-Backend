import { IUserRepositoryDTO } from "../dtos/UserRepositoryDtos";

interface IUserRepository {
  create({name, email, password}: IUserRepositoryDTO): void;
}

export { IUserRepository }