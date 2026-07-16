import { AppError } from "@/common/errors/AppError";
import { UsersRepository } from "./repository";

export class UsersService {
  constructor(
    private repository = new UsersRepository()
  ) {}

  async listUsers() {
    return this.repository.findAll();
  }

  async getUser(id: number) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    return user;
  }

  async createUser(data: {
    name: string;
    email: string;
  }) {
    const existingUser =
      await this.repository.findByEmail(data.email);

    if (existingUser) {
      throw new AppError(
        "Email already exists",
        409
      );
    }

    return this.repository.create(data);
  }

  async updateUser(
    id: number,
    data: {
      name?: string;
      email?: string;
    }
  ) {
    await this.getUser(id);

    if (data.email) {
      const existingUser =
        await this.repository.findByEmail(data.email);

      if (
        existingUser &&
        existingUser.id !== id
      ) {
        throw new AppError(
          "Email already exists",
          409
        );
      }
    }

    return this.repository.update(id, data);
  }

  async deleteUser(id: number) {
    await this.getUser(id);

    return this.repository.delete(id);
  }
}