import jwt from "jsonwebtoken";


export function createToken(
payload:{
id:number;
role:string;
}
){

return jwt.sign(
payload,
process.env.JWT_SECRET!,
{
expiresIn:"7d"
}
);

}