import { BooksRepository } from "./repository";
import { AppError } from "@/common/errors/AppError";


export class BooksService {


  constructor(
    private repository = new BooksRepository()
  ){}




  async listBooks(){

    return this.repository.findAll();

  }





  async getBook(
    id:number
  ){

    const book =
      await this.repository.findById(id);



    if(!book){

      throw new AppError(
        "Book not found",
        404
      );

    }



    return book;

  }





  async createBook(
    data:{
      title:string;
      author:string;
      isbn?:string;
      price?:number;
      category?:string;
      description?:string;
      image?:string;
      available?:boolean;
    }
  ){


    if(data.isbn){


      const existing =
        await this.repository.findByISBN(
          data.isbn
        );



      if(existing){

        throw new AppError(
          "ISBN already exists",
          409
        );

      }

    }



    return this.repository.create(data);

  }






  async updateBook(
    id:number,
    data:{
      title?:string;
      author?:string;
      isbn?:string;
      price?:number;
      category?:string;
      description?:string;
      image?:string;
      available?:boolean;
    }
  ){


    await this.getBook(id);



    return this.repository.update(
      id,
      data
    );

  }






  async deleteBook(
    id:number
  ){

    await this.getBook(id);


    return this.repository.delete(id);

  }






  async borrowBook(
    id:number
  ){


    const book =
      await this.getBook(id);



    if(!book.available){

      throw new AppError(
        "Book already borrowed",
        409
      );

    }



    return this.repository.update(
      id,
      {
        available:false,
      }
    );

  }







  async returnBook(
    id:number
  ){


    await this.getBook(id);



    return this.repository.update(
      id,
      {
        available:true,
      }
    );

  }



}