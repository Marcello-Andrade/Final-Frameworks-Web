"use client";

import {
createContext,
useContext,
useState,
ReactNode
} from "react";


type CartBook = {

id:number;
title:string;
author:string;
image:string;

};



type CartContextType={

cart:CartBook[];

addToCart:(book:CartBook)=>void;

removeFromCart:(id:number)=>void;

clearCart:()=>void;

};



const CartContext =
createContext<CartContextType|null>(null);



export function CartProvider({
children
}:{
children:ReactNode;
}){


const [cart,setCart]=
useState<CartBook[]>([]);



function addToCart(book:CartBook){

setCart(current=>{

 if(
 current.some(
 item=>item.id===book.id
 )
 ){

 return current;

 }


 return [
  ...current,
  book
 ];

});

}



function removeFromCart(id:number){

setCart(current=>
 current.filter(
 book=>book.id!==id
 )
);

}



function clearCart(){

setCart([]);

}



return (

<CartContext.Provider

value={{
cart,
addToCart,
removeFromCart,
clearCart
}}

>

{children}

</CartContext.Provider>

);

}



export function useCart(){

const context =
useContext(CartContext);


if(!context){

throw new Error(
"useCart must be inside CartProvider"
);

}


return context;

}