"use client";
import { useMemo } from "react";
import { useCart } from "./useCart";

export function useCartTotals() {
  const { items } = useCart();

  return useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        quantity: acc.quantity + item.quantity,
        amount: acc.amount + item.product.price * item.quantity,
      }),
      { quantity: 0, amount: 0 }
    );
  }, [items]);
}
