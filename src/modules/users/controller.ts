import { UsersService } from "./service";

export class UsersController {
  private service = new UsersService();

  async list() {
    return this.service.listUsers();
  }

  async get(id: number) {
    return this.service.getUser(id);
  }

  async create(data: {
    name: string;
    email: string;
  }) {
    return this.service.createUser(data);
  }

  async update(
    id: number,
    data: {
      name?: string;
      email?: string;
    }
  ) {
    return this.service.updateUser(id, data);
  }

  async delete(id: number) {
    return this.service.deleteUser(id);
  }
}