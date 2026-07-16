import { StatisticsController } from "@/modules/statistics/controller";
import { success, failure } from "@/common/apiResponse";

const controller = new StatisticsController();

export async function GET() {
  try {
    const statistics = await controller.get();

    return success(statistics);
  } catch (error) {
    return failure(error);
  }
}