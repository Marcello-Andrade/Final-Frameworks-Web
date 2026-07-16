import { LoansController } from "@/modules/loans/controller";

import {
success,
failure
} from "@/common/apiResponse";

import { cookies } from "next/headers";

import jwt from "jsonwebtoken";


const controller =
new LoansController();


async function getUserId(){

const cookieStore =
await cookies();


console.log(
"ALL COOKIES:",
cookieStore.getAll()
);


const token =
cookieStore.get("token")?.value;


console.log(
"TOKEN:",
token
);


if(!token){

throw new Error(
"Unauthorized"
);

}


const decoded =
jwt.verify(
token,
process.env.JWT_SECRET!
) as {
id:number;
};



return decoded.id;

}




export async function GET(){


try{


const loans =
await controller.list();


return success(
loans
);


}catch(error){

return failure(error);

}


}





export async function POST(
request:Request
){


try{


const userId = await
getUserId();



const body =
await request.json();



const loan =
await controller.create({

userId,

bookId:Number(body.bookId)

});



return success(
loan,
201
);



}catch(error){


console.error(error);


return failure(error);


}


}