import { getProducts } from "@/lib/api/products";
import { ProductList } from "@/app/features/products/components/ProductList";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Products | Store",
  description: "Browse our products",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Container>
      <h1 className="text-2xl font-bold my-8">Products</h1>
      <ProductList products={products} />
    </Container>
  );
}
