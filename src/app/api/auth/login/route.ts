import { AuthController } from "@/modules/auth/controller";
import { cookies } from "next/headers";


const controller =
new AuthController();




export async function POST(
 request:Request
){

console.log(
"🔥 LOGIN ROUTE HIT"
);



try {


const body =
await request.json();



console.log(
"LOGIN EMAIL:",
body.email
);




const result =
await controller.login(
body.email,
body.password
);





const cookieStore =
await cookies();




cookieStore.set(
"token",
result.token,
{

httpOnly:true,

secure:false,

sameSite:"lax",

maxAge:
60 * 60 * 24 * 7,

path:"/"

}
);




console.log(
"COOKIE CREATED:",
result.token.substring(0,25)
);






return Response.json({

success:true,

data:{
user:result.user
}

});



}
catch(error){


console.error(
"LOGIN ERROR:",
error
);



return Response.json(
{
success:false,
message:"Invalid credentials"
},
{
status:401
}
);


}

}