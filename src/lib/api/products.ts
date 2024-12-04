import { Product } from "../types/products";
import { API_BASE_URL, ENDPOINTS } from "./config";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProduct(id: string): Promise<Product> {
  try {
    const res = await fetch(`${API_BASE_URL}${ENDPOINTS.PRODUCT(id)}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const product: Product = await res.json();
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}
