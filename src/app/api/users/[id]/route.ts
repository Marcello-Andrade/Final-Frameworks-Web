import { UsersController } from "@/modules/users/controller";
import { updateUserSchema } from "@/modules/users/schemas";
import { success, failure } from "@/common/apiResponse";

const controller = new UsersController();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await controller.get(Number(id));

    return success(user);
  } catch (error) {
    return failure(error);
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const data = updateUserSchema.parse(body);

    const user = await controller.update(
      Number(id),
      data
    );

    return success(user);
  } catch (error) {
    return failure(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await controller.delete(Number(id));

    return success({
      message: "User deleted successfully",
    });
  } catch (error) {
    return failure(error);
  }
}