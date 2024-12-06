"use client";
import { useMemo } from "react";
import { useCart } from "./useCart";

/**
 * Custom hook for calculating cart totals
 * Memoizes calculations to prevent unnecessary rerenders
 * @returns Object containing total quantity and amount
 */

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
