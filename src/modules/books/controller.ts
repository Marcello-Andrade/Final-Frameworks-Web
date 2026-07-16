import { BooksService } from "./service";
import { z } from "zod";
import { updateBookSchema } from "./schemas";


type UpdateBookDTO =
  z.infer<typeof updateBookSchema>;


export class BooksController {


  private service =
    new BooksService();



  async list(){

    return this.service.listBooks();

  }



  async get(
    id:number
  ){

    return this.service.getBook(id);

  }



  async create(
    data:any
  ){

    return this.service.createBook(data);

  }




  async update(
    id:number,
    data:UpdateBookDTO
  ){

    return this.service.updateBook(
      id,
      data
    );

  }




  async delete(
    id:number
  ){

    return this.service.deleteBook(id);

  }




  async borrow(
    id:number
  ){

    return this.service.borrowBook(id);

  }




  async returnBook(
    id:number
  ){

    return this.service.returnBook(id);

  }


}