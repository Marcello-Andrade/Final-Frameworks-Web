import { prisma } from "@/lib/prisma";


export class BooksRepository {


  async findAll(){

    return prisma.book.findMany({

      orderBy:{
        id:"asc",
      },

    });

  }




  async findByISBN(
    isbn:string
  ){

    return prisma.book.findUnique({

      where:{
        isbn,
      },

    });

  }





  async findById(
    id:number
  ){

    return prisma.book.findUnique({

      where:{
        id,
      },

    });

  }





  async create(
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

    return prisma.book.create({

      data:{
        title:data.title,
        author:data.author,
        isbn:data.isbn || '',
        price:data.price,
        category:data.category,
        description:data.description,
        image:data.image ?? "",
        available:data.available ?? true,
      },

    });

  }






  async update(
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

    return prisma.book.update({

      where:{
        id,
      },


      data,

    });

  }





  async delete(
    id:number
  ){

    return prisma.book.delete({

      where:{
        id,
      },

    });

  }


}