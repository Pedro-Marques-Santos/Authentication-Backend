import { User } from "../entities/User";

interface IUserRepositoryDTO {
  name: string;
  password: string;
  email: string
}

interface UserVerifyDTO {
  password: boolean;
  user?: User;
}

interface UserToken {
  user: IUserRepositoryDTO;
  token: string;
}

export { IUserRepositoryDTO, UserVerifyDTO, UserToken }