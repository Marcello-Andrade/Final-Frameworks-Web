"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useLoans } from "@/context/LoanContext";
import { useBooks } from "@/context/BookContext";
import Link from "next/link";


export default function ProfilePage() {


  const {
    user,
    isLoggedIn,
  } = useAuth();



  const {
    loans,
    returnLoan,
  } = useLoans();



  const {
    refreshBooks,
  } = useBooks();



  const [message, setMessage] =
    useState("");



  if (!isLoggedIn) {

    return (

      <main className="p-10">

        <h1 className="text-3xl font-bold">
          My Profile
        </h1>


        <p className="my-5">
          You need to login first.
        </p>


        <Link
          href="/"
          className="rounded bg-black px-5 py-3 text-white"
        >
          Go Home
        </Link>

      </main>

    );

  }




  async function handleReturn(id:number) {


    try {


      await returnLoan(id);


      await refreshBooks();



      setMessage(
        "✅ Book returned successfully"
      );



      setTimeout(()=>{

        setMessage("");

      },3000);



    } catch(error) {


      console.error(
        "Return error:",
        error
      );


      setMessage(
        "❌ Failed to return book"
      );


    }


  }





  return (

    <main className="mx-auto max-w-5xl p-10">


      <div className="rounded-xl bg-white p-8 shadow">


        <div className="flex items-center gap-8">


          <img
            src={user!.avatar ?? "/avatar.png"}
            alt={user!.name}
            className="
            h-36
            w-36
            rounded-full
            border
            object-cover
            "
          />



          <div>


            <h1 className="text-4xl font-bold">
              {user!.name}
            </h1>



            <p className="mt-2 text-gray-600">
              {user!.email}
            </p>



            <span
              className="
              mt-4
              inline-block
              rounded-full
              bg-black
              px-4
              py-2
              text-sm
              text-white
              capitalize
              "
            >
              {user!.role}
            </span>



          </div>


        </div>





        <hr className="my-8" />





        <h2 className="mb-6 text-3xl font-bold">
          📚 Borrowed Books
        </h2>





        {
          loans.length === 0 && (

            <div className="rounded-xl bg-gray-50 p-8 text-center">

              <p className="text-gray-500">
                You don't have any borrowed books.
              </p>

            </div>

          )
        }






        <div className="grid gap-5">


          {
            loans.map((loan)=>(


              <div
                key={loan.id}
                className="
                flex
                items-center
                gap-5
                rounded-xl
                border
                p-5
                transition
                hover:-translate-y-1
                hover:shadow-lg
                "
              >




                <img
                  src={loan.book.image}
                  alt={loan.book.title}
                  className="
                  h-28
                  w-20
                  rounded-lg
                  object-cover
                  "
                />





                <div className="flex-1">


                  <h3 className="text-xl font-bold">
                    {loan.book.title}
                  </h3>



                  <p className="text-gray-600">
                    {loan.book.author}
                  </p>




                  <span
                    className="
                    mt-3
                    inline-block
                    rounded-full
                    bg-green-100
                    px-3
                    py-1
                    text-sm
                    text-green-700
                    "
                  >
                    Borrowed
                  </span>



                </div>







               <button

onClick={() =>
  handleReturn(loan.id)
}


className="
rounded-lg
bg-red-600
px-5
py-3
text-white
transition
hover:bg-red-700
active:scale-95
disabled:cursor-not-allowed
disabled:bg-gray-400
"

>
Return Book
</button>




              </div>


            ))

          }



        </div>


      </div>







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
            animate-bounce
            "
          >

            {message}

          </div>

        )
      }





    </main>

  );

}