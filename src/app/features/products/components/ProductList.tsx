"use client";
import { Product } from "@/lib/types/products";
import { ProductItem } from "./ProductItem";
import { usePagination } from "../hooks/usePagination";
import { Button } from "@/components/ui/Button";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  const { currentProducts, currentPage, totalPages, nextPage, prevPage } =
    usePagination(products);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button
          variant="secondary"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="py-2">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="secondary"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
