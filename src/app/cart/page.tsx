"use client";

import { useCart } from "@/context/CartContext";
import { useLoans } from "@/context/LoanContext";
import { useAuth } from "@/context/AuthContext";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function CartPage() {


  const {
    cart,
    removeFromCart,
    clearCart,
  } = useCart();


  const {
    createLoan,
  } = useLoans();


  const {
    user,
  } = useAuth();


  const router = useRouter();


  const [message,setMessage] =
  useState("");



  async function confirmLoan(){


    if(!user){

      setMessage(
        "You need to login first"
      );

      return;

    }



    try{


      for(const book of cart){

        await createLoan(
          book.id
        );

      }



      clearCart();



      setMessage(
        "✅ Loan confirmed!"
      );


      setTimeout(()=>{

        router.push("/profile");

      },1500);



    }
    catch(error){

      console.error(error);

      setMessage(
        "❌ Could not create loan"
      );

    }


  }




  return (

    <main className="min-h-screen bg-gray-100 p-8">



      <h1 className="mb-8 text-4xl font-bold">
        📚 Borrow List
      </h1>



      {
        cart.length === 0 && (

          <div className="rounded-xl bg-white p-10 text-center shadow">

            <h2 className="text-2xl font-bold">
              Your borrow list is empty
            </h2>


            <p className="mt-3 text-gray-500">
              Choose a book to start your loan.
            </p>

          </div>

        )
      }




      <div className="grid gap-5">


      {
        cart.map(book=>(


          <div
          key={book.id}
          className="
          flex
          items-center
          gap-5
          rounded-xl
          bg-white
          p-5
          shadow
          transition
          hover:shadow-xl
          "
          >


            <img
            src={book.image}
            className="h-28 w-20 rounded-lg object-cover"
            />


            <div className="flex-1">

              <h2 className="text-xl font-bold">
                {book.title}
              </h2>


              <p className="text-gray-600">
                {book.author}
              </p>


              <span
              className="
              mt-2
              inline-block
              rounded-full
              bg-blue-100
              px-3
              py-1
              text-sm
              text-blue-700
              "
              >
                1 copy
              </span>


            </div>



            <button

            onClick={()=>removeFromCart(book.id)}

            className="
            flex
            items-center
            gap-2
            rounded-lg
            bg-red-600
            px-5
            py-3
            text-white
            hover:bg-red-700
            active:scale-95
            "

            >

              <Trash2 size={18}/>

              Remove

            </button>


          </div>


        ))
      }


      </div>




      {
        cart.length > 0 && (

          <div
          className="
          mt-8
          flex
          justify-between
          rounded-xl
          bg-white
          p-6
          shadow
          "
          >


            <button
            onClick={clearCart}
            className="
            rounded-lg
            border
            px-6
            py-3
            hover:bg-gray-100
            "
            >

              Clear List

            </button>




            <button

            onClick={confirmLoan}

            className="
            rounded-xl
            bg-green-600
            px-10
            py-3
            text-white
            transition
            hover:bg-green-700
            active:scale-95
            "

            >

              Confirm Loan

            </button>


          </div>

        )
      }



      {
        message && (

          <div
          className="
          fixed
          bottom-8
          right-8
          rounded-xl
          bg-black
          px-6
          py-4
          text-white
          shadow-xl
          "
          >

            {message}

          </div>

        )
      }


    </main>

  );

}