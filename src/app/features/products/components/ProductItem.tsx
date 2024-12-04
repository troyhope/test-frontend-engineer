"use client";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Product } from "@/lib/types/products";

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card>
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain"
          width={300}
          height={300}
        />
        <h2 className="mt-4 font-semibold truncate">{product.title}</h2>
        <p className="text-lg font-bold mt-2">${product.price}</p>
      </Card>
    </Link>
  );
}
