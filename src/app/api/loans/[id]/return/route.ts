import { LoansController } from "@/modules/loans/controller";
import { success, failure } from "@/common/apiResponse";

const controller = new LoansController();

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const loan = await controller.returnLoan(
      Number(id)
    );

    return success(loan);
  } catch (error) {
    return failure(error);
  }
}