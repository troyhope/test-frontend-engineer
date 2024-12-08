import { CartState, CartAction, CartItem, CartTotals } from "../types";

/**
 * Calculates cart totals from items array
 * @param items Array of cart items
 * @returns Cart totals with quantity and amount
 */

function calculateTotals(items: CartItem[]): CartTotals {
  return items.reduce(
    (acc, item) => ({
      quantity: acc.quantity + item.quantity,
      amount: acc.amount + item.product.price * item.quantity,
    }),
    { quantity: 0, amount: 0 }
  );
}

/**
 * Manages cart state updates through actions
 * @param state Current cart state
 * @param action Cart action to perform
 * @returns Updated cart state
 */

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      // Check if item already exists in cart
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      // If exists, increment quantity, otherwise add new item
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

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;

      // Remove item if quantity is 0 or less
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.product.id !== id);
        return {
          ...state,
          items: newItems,
          totals: calculateTotals(newItems),
        };
      }

      // Update quantity for item
      const newItems = state.items.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      );

      return {
        ...state,
        items: newItems,
        totals: calculateTotals(newItems),
      };
    }

    case "HYDRATE":
      return action.payload;

    default:
      return state;
  }
}
