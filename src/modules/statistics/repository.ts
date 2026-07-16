import { prisma } from "@/lib/prisma";

export class StatisticsRepository {
  async countBooks() {
    return prisma.book.count();
  }

  async countAvailableBooks() {
    return prisma.book.count({
      where: {
        available: true,
      },
    });
  }

  async countUsers() {
    return prisma.user.count();
  }

  async countActiveLoans() {
    return prisma.loan.count({
      where: {
        returnedAt: null,
      },
    });
  }
}