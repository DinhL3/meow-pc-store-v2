import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getVisibleProducts } from '@/lib/products';
import { productsCache } from '@/lib/queries/products';
import ProductList from '@/components/ProductList';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    ...productsCache.options(),
    queryFn: getVisibleProducts,
  });

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="mt-8 mb-4 text-center text-3xl font-semibold text-navy">
        Ready-to-play Gaming PCs
      </h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductList />
      </HydrationBoundary>
    </div>
  );
}
