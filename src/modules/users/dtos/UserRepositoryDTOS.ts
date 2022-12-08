import { User } from "../entities/User";

interface IUserRepositoryDTO {
  name: string;
  password: string;
  email: string
}

interface UserVerifyDTO {
  exist: boolean;
  user?: User;
}

export { IUserRepositoryDTO, UserVerifyDTO }