import { BooksController } from "@/modules/books/controller";
import { createBookSchema } from "@/modules/books/schemas";
import { failure, success } from "@/common/apiResponse";

const controller = new BooksController();

export async function GET() {
  try {
    const books = await controller.list();

    return success(books);
  } catch (error) {
    return failure(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = createBookSchema.parse(body);

    const book = await controller.create(data);

    return success(book, 201);
  } catch (error) {
    return failure(error);
  }
}