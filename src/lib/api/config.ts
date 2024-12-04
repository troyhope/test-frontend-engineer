export const API_BASE_URL = "https://fakestoreapi.com";

export const ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT: (id: string) => `/products/${id}`,
} as const;
