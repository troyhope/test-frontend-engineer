"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/app/features/cart/hooks/useCart";
import { Product } from "@/lib/types/products";

type AddToCartButtonProps = {
  product: Product;
};

/**
 * Button component that handles adding items to cart
 * Shows loading state while processing
 * Could be extended to handle API calls in a real implementation
 */

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem(product);

    // Simulate network delay / provide user feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Button
      disabled={isAdding}
      onClick={handleAddToCart}
      className="w-full md:w-auto"
    >
      {isAdding ? "Adding to Cart..." : "Add to Cart"}
    </Button>
  );
}
