import { prisma } from "@/lib/prisma";
import { AppError } from "@/common/errors/AppError";
import bcrypt from "bcrypt";
import { createToken } from "@/lib/auth";


export class AuthService {


  async login(
    email:string,
    password:string
  ){


    const user =
      await prisma.user.findUnique({

        where:{
          email
        }

      });



    if(!user){

      throw new AppError(
        "Invalid credentials",
        401
      );

    }




    const valid =
      await bcrypt.compare(
        password,
        user.password
      );



    if(!valid){

      throw new AppError(
        "Invalid credentials",
        401
      );

    }




    const token =
      createToken({

        id:user.id,

        role:user.role

      });




    return {

      token,


      user:{

        id:user.id,

        name:user.name,

        email:user.email,

        role:user.role,

        avatar:user.avatar,

        phone:user.phone,

        address:user.address,

        memberSince:user.memberSince

      }

    };


  }


}