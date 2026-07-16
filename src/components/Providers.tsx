"use client";

import { AuthProvider } from "@/context/AuthContext";
import { BookProvider } from "@/context/BookContext";
import { CartProvider } from "@/context/CartContext";
import { LoanProvider } from "@/context/LoanContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <LoanProvider>
      <BookProvider>
    <CartProvider>
      {children}
    </CartProvider>
    </BookProvider>
    </LoanProvider>
    </AuthProvider>
  );
}