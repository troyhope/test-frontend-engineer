"use client";
import { useCart } from "@/app/features/cart/hooks/useCart";
import { useCartTotals } from "@/app/features/cart/hooks/useCartTotals";
import { CartItem } from "@/app/features/cart/components/CartItem";
import { OrderSummary } from "@/app/features/cart/components/OrderSummary";
import { EmptyCartMessage } from "@/app/features/cart/components/EmptyCartMessage";
import CartLoading from "./loading";
import { Container } from "@/components/ui/Container";

export default function CartPage() {
  const { items, removeItem, updateQuantity, isLoading } = useCart();
  const { quantity, amount } = useCartTotals();

  if (isLoading) return <CartLoading />;
  if (items.length === 0) return <EmptyCartMessage />;

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <OrderSummary quantity={quantity} amount={amount} />
      </div>
    </Container>
  );
}
