"use client";

import { useAuth } from "@/context/AuthContext";
import { loans } from "@/data/loans";

export default function LoansPage() {
  const { user } = useAuth();

  const myLoans = loans.filter(
    (loan) => loan.userId === user?.id
  );

  return (
    <main className="mx-auto max-w-5xl p-10">

      <h1 className="mb-8 text-4xl font-bold">
        My Loans
      </h1>

      {myLoans.length === 0 && (
        <div className="rounded-xl bg-white p-10 shadow">

          <h2 className="text-2xl">
            You haven't borrowed any books yet.
          </h2>

        </div>
      )}

      {myLoans.map((loan) => (

        <div
          key={loan.id}
          className="mb-6 rounded-xl bg-white p-6 shadow"
        >

          <div className="mb-4 flex justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Loan #{loan.id}
              </h2>

              <p className="text-gray-500">
                Borrowed on {loan.borrowedAt}
              </p>

            </div>

            <span
              className={`rounded-full px-4 py-2 ${
                loan.status === "Returned"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {loan.status}
            </span>

          </div>

          <div className="mb-4">

            {loan.books.map((book) => (

              <p key={book}>
                📚 {book}
              </p>

            ))}

          </div>

          <p className="text-gray-600">
            Due Date:{" "}
            <strong>{loan.dueDate}</strong>
          </p>

        </div>

      ))}

    </main>
  );
}