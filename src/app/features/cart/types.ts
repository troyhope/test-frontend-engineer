import { Product } from "@/lib/types/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartTotals = {
  quantity: number;
  amount: number;
};

export type CartState = {
  items: CartItem[];
  totals: CartTotals;
};

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "HYDRATE"; payload: CartState };
