'use client';

import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';
import ProductCard from '@/components/ProductCard';
import { productsCache } from '@/lib/queries/products';

type SortOption = 'price-asc' | 'price-desc';

export default function ProductList() {
  const [sortBy, setSortBy] = useState<SortOption>('price-asc');
  const { data: products, isPending, isError } = useQuery(productsCache.options());

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    return [...products].sort((a, b) =>
      sortBy === 'price-asc' ? a.price - b.price : b.price - a.price,
    );
  }, [products, sortBy]);

  if (isError) {
    return (
      <p className="text-center text-navy py-12">
        Couldn&apos;t load PCs right now. Please try again later.
      </p>
    );
  }

  if (isPending) {
    return (
      <div className="flex justify-center py-12">
        <BeatLoader color="#1d3557" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center mb-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="border border-ocean-blue rounded-sm px-4 py-2 text-navy text-sm"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {sortedProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} isAboveFold={index === 0} />
        ))}
      </div>
    </div>
  );
}
