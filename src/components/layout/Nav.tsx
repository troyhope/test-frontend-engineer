"use client";
import Link from "next/link";
import { useCartTotals } from "@/app/features/cart/hooks/useCartTotals";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav() {
  const { quantity } = useCartTotals();
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (quantity > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [quantity]);

  return (
    <nav className="sticky top-0 bg-white border-b z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/products" className="font-semibold text-lg">
          Store
        </Link>
        {!isCartPage && (
          <Link
            href="/cart"
            className={twMerge(
              "flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all",
              isAnimating && "animate-scale"
            )}
          >
            Cart ({quantity})
          </Link>
        )}
      </div>
    </nav>
  );
}
