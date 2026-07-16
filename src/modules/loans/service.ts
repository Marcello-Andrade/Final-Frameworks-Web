import { prisma } from "@/lib/prisma";
import { AppError } from "@/common/errors/AppError";
import { LoansRepository } from "./repository";


export class LoansService {


  constructor(
    private repository = new LoansRepository()
  ) {}





  async listLoans(){

    return this.repository.findAll();

  }







  async createLoan(data:{
    userId:number;
    bookId:number;
  }){


    console.log(
      "CREATING LOAN:",
      data
    );



    const user =
      await prisma.user.findUnique({

        where:{
          id:data.userId
        }

      });



    if(!user){

      throw new AppError(
        "User not found",
        404
      );

    }





    const book =
      await prisma.book.findUnique({

        where:{
          id:data.bookId
        }

      });




    if(!book){

      throw new AppError(
        "Book not found",
        404
      );

    }




    if(!book.available){

      throw new AppError(
        "Book already borrowed",
        409
      );

    }





    const result =
      await prisma.$transaction(async(tx)=>{


        const loan =
          await tx.loan.create({

            data:{
              userId:data.userId,
              bookId:data.bookId
            },

            include:{
              user:true,
              book:true
            }

          });



        await tx.book.update({

          where:{
            id:data.bookId
          },

          data:{
            available:false
          }

        });



        return loan;


      });




    return result;


  }









  async returnLoan(
    id:number
  ){



    const loan =
      await this.repository.findById(
        id
      );



    if(!loan){

      throw new AppError(
        "Loan not found",
        404
      );

    }




    if(loan.returnedAt){

      throw new AppError(
        "Already returned",
        409
      );

    }





    const result =
      await prisma.$transaction(async(tx)=>{


        const returnedLoan =
          await tx.loan.update({

            where:{
              id
            },

            data:{
              returnedAt:new Date()
            },

            include:{
              book:true,
              user:true
            }

          });



        await tx.book.update({

          where:{
            id:loan.bookId
          },

          data:{
            available:true
          }

        });



        return returnedLoan;


      });




    return result;


  }


}