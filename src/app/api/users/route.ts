import { UsersController } from "@/modules/users/controller";
import { createUserSchema } from "@/modules/users/schemas";
import { success, failure } from "@/common/apiResponse";

const controller = new UsersController();

export async function GET() {
  try {
    const users = await controller.list();

    return success(users);
  } catch (error) {
    return failure(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = createUserSchema.parse(body);

    const user = await controller.create(data);

    return success(user, 201);
  } catch (error) {
    return failure(error);
  }
}