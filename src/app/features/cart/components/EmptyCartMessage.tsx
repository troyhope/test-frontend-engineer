import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function EmptyCartMessage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-4">
      <h1 className="text-2xl font-bold">Your cart is empty</h1>
      <Link href="/products">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}
