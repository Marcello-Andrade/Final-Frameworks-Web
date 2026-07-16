"use client";

import BookCard from "@/components/BookCard";
import { Users, BookOpen, Library } from "lucide-react";
import { useBooks } from "@/context/BookContext";

export default function Home() {

  const {
    books
  } = useBooks();


  const totalBooks =
    books.length;


  const availableBooks =
    books.filter(
      (book) => book.available
    ).length;


  const borrowedBooks =
    totalBooks - availableBooks;



  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <header className="mb-10">

        <h1 className="text-4xl font-bold">
          📚 Bookshelf Manager
        </h1>

        <p className="mt-2 text-gray-600">
          Library management dashboard
        </p>

      </header>



      <section className="mb-10 grid gap-5 md:grid-cols-3">


        <div className="rounded-xl bg-white p-6 shadow">

          <div className="flex items-center gap-3">

            <Library />

            <h2 className="font-semibold">
              Total Books
            </h2>

          </div>


          <p className="mt-3 text-3xl font-bold">
            {totalBooks}
          </p>

        </div>





        <div className="rounded-xl bg-white p-6 shadow">

          <div className="flex items-center gap-3">

            <BookOpen />

            <h2 className="font-semibold">
              Available
            </h2>

          </div>


          <p className="mt-3 text-3xl font-bold">
            {availableBooks}
          </p>

        </div>





        <div className="rounded-xl bg-white p-6 shadow">

          <div className="flex items-center gap-3">

            <Users />

            <h2 className="font-semibold">
              Borrowed
            </h2>

          </div>


          <p className="mt-3 text-3xl font-bold">
            {borrowedBooks}
          </p>

        </div>


      </section>





      <section>

        <h2 className="mb-5 text-2xl font-bold">
          Books Collection
        </h2>




        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {
            books.map((book)=>(
              
              <BookCard
                key={book.id}
                {...book}
              />

            ))
          }



        </div>


      </section>


    </main>
  );
}