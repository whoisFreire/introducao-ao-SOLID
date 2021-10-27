import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const allow = this.usersRepository.findByEmail(email);
    if (allow) {
      throw new Error("Email ja cadastrado");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
