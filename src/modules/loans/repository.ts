import { prisma } from "@/lib/prisma";

export class LoansRepository {
  async findAll(){

 return prisma.loan.findMany({

   where:{
     returnedAt:null
   },

   include:{
     book:{
       select:{
         id:true,
         title:true,
         author:true,
         image:true,
         available:true
       }
     }
   }

 });

}

  async findById(id: number) {
    return prisma.loan.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        book: true,
      },
    });
  }

  async countActiveLoansByUser(userId: number) {
    return prisma.loan.count({
      where: {
        userId,
        returnedAt: null,
      },
    });
  }

  async create(data: {
    userId: number;
    bookId: number;
  }) {
    return prisma.loan.create({
      data,
      include: {
        user: true,
        book: true,
      },
    });
  }

  async returnLoan(id: number) {
    return prisma.loan.update({
      where: {
        id,
      },
      data: {
        returnedAt: new Date(),
      },
      include: {
        user: true,
        book: true,
      },
    });
  }
}