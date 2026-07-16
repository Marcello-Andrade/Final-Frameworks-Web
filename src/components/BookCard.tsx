"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


type BookProps = {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
};



export default function BookCard({
  id,
  title,
  author,
  image,
  available,
}: BookProps) {


  const {
    addToCart
  } = useCart();



  const [
    confirmOpen,
    setConfirmOpen
  ] = useState(false);





  function handleBorrow(){


    addToCart({

      id,
      title,
      author,
      image,

    });



    setConfirmOpen(false);

  }






  return (

    <>


    {
      confirmOpen && (

        <div
        className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        backdrop-blur-sm
        "
        >


          <div
          className="
          w-[420px]
          rounded-2xl
          bg-white
          p-8
          shadow-2xl
          animate-in
          fade-in
          zoom-in
          "
          >


            <h2 className="text-2xl font-bold">

              📚 Confirm Borrow

            </h2>



            <p className="mt-4 text-gray-600">

              You are about to borrow:

            </p>



            <div
            className="
            my-5
            rounded-xl
            bg-gray-100
            p-4
            "
            >

              <p className="font-bold">
                {title}
              </p>


              <p className="text-gray-600">
                {author}
              </p>


            </div>




            <p className="text-sm text-gray-500">

              The book will be added to your borrow list.

            </p>





            <div
            className="
            mt-8
            flex
            justify-end
            gap-3
            "
            >


              <button

              onClick={()=>
                setConfirmOpen(false)
              }

              className="
              rounded-lg
              border
              px-5
              py-2
              transition
              hover:bg-gray-100
              "
              >

                Cancel

              </button>






              <button

              onClick={handleBorrow}

              className="
              rounded-lg
              bg-green-600
              px-5
              py-2
              text-white
              transition
              hover:bg-green-700
              active:scale-95
              "

              >

                Confirm Loan

              </button>


            </div>



          </div>


        </div>

      )
    }






    <div
    className="
    group
    rounded-xl
    border
    bg-white
    p-4
    shadow
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
    "
    >





      <Link href={`/books/${id}`}>

        <div
        className="
        overflow-hidden
        rounded-lg
        "
        >

          <img

          src={image}

          alt={title}

          className="
          h-64
          w-full
          cursor-pointer
          object-cover
          transition
          duration-300
          group-hover:scale-105
          "

          />


        </div>


      </Link>







      <Link href={`/books/${id}`}>


        <h2
        className="
        mt-4
        cursor-pointer
        text-xl
        font-bold
        transition
        hover:text-blue-600
        "
        >

          {title}


        </h2>


      </Link>





      <p className="mt-1 text-gray-600">

        {author}

      </p>






      <span
      className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${
        available
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
      }`}
      >

        {
          available
          ? "Available"
          : "Borrowed"
        }

      </span>







      <button

      disabled={!available}

      onClick={()=>{

        if(available){

          setConfirmOpen(true);

        }

      }}


      className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-white transition active:scale-95 ${
        
        available

        ? "bg-black hover:bg-gray-800 hover:scale-[1.02]"

        : "cursor-not-allowed bg-gray-300"

      }`}

      >


        <ShoppingCart size={18}/>


        {
          available
          ? "Borrow Book"
          : "Unavailable"
        }


      </button>



    </div>



    </>

  );

}