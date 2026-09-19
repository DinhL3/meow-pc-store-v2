// client-side data fetching config for TanStack Query.
import { queryOptions } from '@tanstack/react-query';
import type { Product } from '@/data/product.types';

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export const productsCache = {
  key: ['products'] as const,
  options: () =>
    queryOptions({
      queryKey: productsCache.key,
      queryFn: fetchProducts,
    }),
};
