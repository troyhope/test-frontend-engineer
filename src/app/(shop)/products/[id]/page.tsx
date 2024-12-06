import Image from "next/image";
import { notFound } from "next/navigation";

import { getProduct } from "@/lib/api/products";
import { Button } from "@/components/ui/Button";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Await params before accessing properties or nextjs will throw an error
  const { id } = await params;

  try {
    const product = await getProduct(id);

    if (!product) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl font-bold">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <Button className="w-full md:w-auto">Add to Cart</Button>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}