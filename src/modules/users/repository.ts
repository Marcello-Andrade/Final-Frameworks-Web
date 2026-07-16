import { prisma } from "@/lib/prisma";

export class UsersRepository {
  async findAll() {
    return prisma.user.findMany({
      orderBy: {
        id: "asc",
      },
    });
  }

  async findById(id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: {
    name: string;
    email: string;
  }) {
    return prisma.user.create({
      data,
    });
  }

  async update(
    id: number,
    data: {
      name?: string;
      email?: string;
    }
  ) {
    return prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number) {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }
}