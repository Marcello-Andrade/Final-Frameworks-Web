"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";


type LoanBook={
 id:number;
 title:string;
 author:string;
 image:string;
 available:boolean;
};


export type Loan = {
  id:number;
  userId:number;
  bookId:number;
  book:LoanBook;
  returnedAt?:string|null;
};



type LoanContextType = {

  loans:Loan[];

createLoan:
(
  bookId:number
)=>Promise<void>;


  returnLoan:
  (
    id:number
  )=>Promise<void>;


  loadLoans:
  ()=>Promise<void>;

};



const LoanContext =
createContext<LoanContextType|null>(null);




export function LoanProvider({
 children
}:{
 children:ReactNode;
}){


const [loans,setLoans] =
useState<Loan[]>([]);




async function loadLoans(){


  const res =
await fetch(
"/api/loans",
{
 credentials:"include"
}
)


  if(!res.ok){

    console.error(
      "Failed loading loans"
    );

    return;

  }



  const data =
  await res.json();



  setLoans(
    data.data ?? []
  );

}




useEffect(()=>{

  loadLoans();

},[]);






async function createLoan(
 bookId:number
){


const res =
await fetch(
"/api/loans",
{
 method:"POST",

 credentials:"include",

 headers:{
  "Content-Type":"application/json"
 },

 body:JSON.stringify({
  bookId
 })

}
);


  if(!res.ok){

    const error =
    await res.json();


    throw new Error(
      error.message ||
      "Could not create loan"
    );

  }



  await loadLoans();

}





async function returnLoan(id:number){

const res =
await fetch(
`/api/loans/${id}`,
{
 method:"PUT",
 credentials:"include"
}
);


 if(!res.ok){

   const error =
     await res.json();

   throw new Error(
     error.message ?? "Return failed"
   );

 }


 await loadLoans();

}






return (

<LoanContext.Provider

value={{

 loans,

 createLoan,

 returnLoan,

 loadLoans

}}

>


{children}


</LoanContext.Provider>

);


}






export function useLoans(){


const context =
useContext(LoanContext);



if(!context){

 throw new Error(
 "useLoans must be inside LoanProvider"
 );

}



return context;


}