import { LoansService } from "./service";

export class LoansController {
  private service = new LoansService();

  async list() {
    return this.service.listLoans();
  }

  async get(id: number) {
    return this.service.getLoan(id);
  }

  async create(data: {
    userId: number;
    bookId: number;
  }) {
    return this.service.createLoan(data);
  }

  async returnLoan(id: number) {
    return this.service.returnLoan(id);
  }
}