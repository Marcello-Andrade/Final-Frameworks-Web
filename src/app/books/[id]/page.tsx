"use client";

import { useState } from "react";
import { books } from "@/data/books";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BookDetails({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const book = books.find(
    (book) => book.id === Number(params.id)
  );

  const { addToCart } = useCart();

  const [confirmOpen, setConfirmOpen] =
    useState(false);

  if (!book) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Book not found
        </h1>
      </main>
    );
  }

  function handleBorrow() {
    book &&
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      image: book.image,
    });

    setConfirmOpen(false);
  }

  return (
    <>
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="w-[430px] rounded-xl bg-white p-8 shadow-2xl">

            <h2 className="mb-3 text-2xl font-bold">
              📚 Borrow Book
            </h2>

            <p className="mb-2 text-gray-600">
              Are you sure you want to borrow
            </p>

            <p className="mb-6 text-lg font-semibold">
              "{book.title}"
            </p>

            <p className="mb-8 text-gray-500">
              This book will be added to your borrowed books.
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() =>
                  setConfirmOpen(false)
                }
                className="rounded-lg border px-5 py-2 transition hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleBorrow}
                className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800 active:scale-95"
              >
                Borrow Book
              </button>

            </div>

          </div>

        </div>
      )}

      <main className="min-h-screen bg-gray-100 p-8">

        <Link
          href="/"
          className="mb-6 inline-block rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
        >
          ← Back
        </Link>

        <div className="mx-auto grid max-w-5xl gap-10 rounded-xl bg-white p-8 shadow-lg transition-all duration-300 md:grid-cols-2">

          <div className="overflow-hidden rounded-xl">

            <img
              src={book.image}
              alt={book.title}
              className="h-[500px] w-full object-cover transition duration-300 hover:scale-105"
            />

          </div>

          <div>

            <h1 className="text-4xl font-bold">
              {book.title}
            </h1>

            <p className="mt-3 text-xl text-gray-600">
              {book.author}
            </p>

            <p className="mt-6 leading-7 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer dignissim, sapien sed gravida vulputate,
              mauris erat luctus lorem, vitae egestas purus
              magna at ipsum. This is a demo description for the book.
            </p>

            <div className="mt-8">

              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  book.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {book.available
                  ? "Available"
                  : "Currently Borrowed"}
              </span>

            </div>

            <button
              disabled={!book.available}
              onClick={() =>
                setConfirmOpen(true)
              }
              className={`mt-10 flex items-center gap-3 rounded-xl px-8 py-4 text-lg font-medium text-white transition-all duration-200 active:scale-95 ${
                book.available
                  ? "bg-black hover:scale-[1.02] hover:bg-gray-800"
                  : "cursor-not-allowed bg-gray-300"
              }`}
            >

              <ShoppingCart size={22} />

              {book.available
                ? "Borrow this Book"
                : "Unavailable"}

            </button>

          </div>

        </div>

      </main>
    </>
  );
}