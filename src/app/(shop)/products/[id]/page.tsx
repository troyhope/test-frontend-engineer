import Image from "next/image";
import { notFound } from "next/navigation";

import { getProduct } from "@/lib/api/products";
import { AddToCartButton } from "@/app/features/products/components/AddToCartButton";
import { Container } from "@/components/ui/Container";

type AsyncParams = Promise<{ id: string }>;

export default async function ProductDetailPage(props: {
  params: AsyncParams;
}) {
  try {
    const { id } = await props.params;
    const product = await getProduct(id);

    if (!product) {
      notFound();
    }

    return (
      <Container>
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
            <AddToCartButton product={product} />
          </div>
        </div>
      </Container>
    );
  } catch {
    notFound();
  }
}
