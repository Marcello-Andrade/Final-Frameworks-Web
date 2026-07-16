import { z } from "zod";


export const createBookSchema = z.object({


  title:
    z.string()
    .min(1,"Title is required"),



  author:
    z.string()
    .min(1,"Author is required"),




  isbn:
    z.string()
    .min(5,"ISBN must have at least 5 characters")
    .optional(),




  price:
    z.number()
    .optional(),




  category:
    z.string()
    .optional(),




  description:
    z.string()
    .optional(),




  image:
    z.string()
    .optional(),




  available:
    z.boolean()
    .optional(),


});



export const updateBookSchema =
createBookSchema.partial();