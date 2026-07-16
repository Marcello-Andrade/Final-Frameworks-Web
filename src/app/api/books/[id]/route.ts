import { BooksController } from "@/modules/books/controller";
import { updateBookSchema } from "@/modules/books/schemas";
import { success, failure } from "@/common/apiResponse";

const controller = new BooksController();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const book = await controller.get(Number(id));

    return success(book);
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

    const data = updateBookSchema.parse(body);

    const book = await controller.update(Number(id), data);

    return success(book);
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
      message: "Book deleted successfully",
    });
  } catch (error) {
    return failure(error);
  }
}