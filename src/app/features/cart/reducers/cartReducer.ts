import { CartState, CartAction, CartItem, CartTotals } from "../types";

function calculateTotals(items: CartItem[]): CartTotals {
  return items.reduce(
    (acc, item) => ({
      quantity: acc.quantity + item.quantity,
      amount: acc.amount + item.product.price * item.quantity,
    }),
    { quantity: 0, amount: 0 }
  );
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      const newItems = existingItem
        ? state.items.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { product: action.payload, quantity: 1 }];

      return {
        ...state,
        items: newItems,
        totals: calculateTotals(newItems),
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "HYDRATE":
      return action.payload;

    default:
      return state;
  }
}
