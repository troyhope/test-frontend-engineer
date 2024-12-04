import { getProducts } from "@/lib/api/products";
import { ProductList } from "@/app/features/products/components/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Store",
  description: "Browse our products",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-8">Products</h1>
      <ProductList products={products} />
    </div>
  );
}
