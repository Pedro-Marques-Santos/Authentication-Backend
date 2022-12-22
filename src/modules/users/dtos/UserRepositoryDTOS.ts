import { User } from "../entities/User";

interface IUserRepositoryDTO {
  name: string;
  password: string;
  email: string
}

interface IProfileUserDTO {
  email: string;
}

interface UserVerifyDTO {
  password: boolean;
  user?: User;
}

interface UserToken {
  name: string;
  token: string;
}

export { IUserRepositoryDTO, UserVerifyDTO, UserToken, IProfileUserDTO }