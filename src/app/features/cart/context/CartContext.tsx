"use client";
import { createContext, useReducer, useEffect } from "react";
import { CartState, CartAction } from "../types";
import { cartReducer } from "../reducers/cartReducer";

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | null>(null);

const initialState: CartState = {
  items: [],
  totals: { quantity: 0, amount: 0 },
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({
        type: "HYDRATE",
        payload: JSON.parse(savedCart),
      });
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
