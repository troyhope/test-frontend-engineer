"use client";
import { useContext, useCallback, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "@/lib/types/products";

export function useCart() {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  const { state, dispatch } = context;

  // Set loading false once context is hydrated
  useEffect(() => {
    setIsLoading(false);
  }, [state.items]);

  const addItem = useCallback(
    (product: Product) => {
      dispatch({ type: "ADD_ITEM", payload: product });
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (id: number) => {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    },
    [dispatch]
  );

  return {
    items: state.items,
    totals: state.totals,
    isLoading,
    addItem,
    removeItem,
    updateQuantity,
  };
}
