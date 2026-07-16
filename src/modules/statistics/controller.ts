import { StatisticsService } from "./service";

export class StatisticsController {
  private service = new StatisticsService();

  async get() {
    return this.service.getStatistics();
  }
}