import { StatisticsRepository } from "./repository";

export class StatisticsService {
  constructor(
    private repository = new StatisticsRepository()
  ) {}

  async getStatistics() {
    const [
      totalBooks,
      availableBooks,
      totalUsers,
      activeLoans,
    ] = await Promise.all([
      this.repository.countBooks(),
      this.repository.countAvailableBooks(),
      this.repository.countUsers(),
      this.repository.countActiveLoans(),
    ]);

    return {
      totalBooks,
      availableBooks,
      borrowedBooks: totalBooks - availableBooks,
      totalUsers,
      activeLoans,
    };
  }
}