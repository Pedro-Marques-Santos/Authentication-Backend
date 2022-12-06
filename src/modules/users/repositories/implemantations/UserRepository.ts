import { User } from "../../model/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private allUsers: User[] = []

  constructor() {
    this.allUsers = [];
  }

  create({ name, email, password }: User): void {
    const user = new User();

    user.name = name;
    user.email = email;
    user.password = password;

    this.allUsers.push(user);
  }

}

export { UserRepository }