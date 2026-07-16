"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";


export type Book = {
  id:number;
  title:string;
  author:string;
  isbn?:string;
  price?:number;
  category?:string;
  description?:string;
  image:string;
  available:boolean;
};



type BookContextType = {

  books:Book[];

  refreshBooks:()=>Promise<void>;

};



const BookContext =
createContext<BookContextType | null>(null);



export function BookProvider({
 children
}:{
 children:ReactNode;
}){


const [books,setBooks] =
useState<Book[]>([]);



async function refreshBooks(){

 const res =
 await fetch("/api/books");


 const data =
 await res.json();


 setBooks(
   data.data ?? []
 );

}



useEffect(()=>{

 refreshBooks();

},[]);





return (

<BookContext.Provider

 value={{
  books,
  refreshBooks
 }}

>

{children}

</BookContext.Provider>

);

}





export function useBooks(){

const context =
useContext(BookContext);


if(!context){

throw new Error(
"useBooks must be inside BookProvider"
);

}


return context;

}