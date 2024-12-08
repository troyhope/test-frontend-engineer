"use client";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CartItem as CartItemType } from "../types";

type CartItemProps = {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 border p-4 rounded-lg">
      <div className="relative w-24 h-24">
        <Image
          src={item.product.image}
          alt={item.product.title}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.title}</h3>
        <p className="text-gray-600">${item.product.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="secondary"
            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            variant="secondary"
            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
          >
            +
          </Button>
          <Button variant="secondary" onClick={() => onRemove(item.product.id)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
