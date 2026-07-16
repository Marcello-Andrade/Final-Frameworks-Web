import { z } from "zod";


export const createLoanSchema =
z.object({

 userId:
 z.number(),


 bookId:
 z.number(),

});