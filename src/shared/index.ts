import { container } from 'tsyringe';
import { UserRepository } from '../modules/users/repositories/implemantations/UserRepository';
import { IUserRepository } from '../modules/users/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
  "UserRepository", UserRepository
);