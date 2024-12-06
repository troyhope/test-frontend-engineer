"use client";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/app/features/cart/hooks/useCart";
import { Product } from "@/lib/types/products";

type AddToCartButtonProps = {
  product: Product;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button onClick={handleAddToCart} className="w-full md:w-auto">
      Add to Cart
    </Button>
  );
}
