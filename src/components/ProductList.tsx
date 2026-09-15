"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/product.types";
import ProductCard from "@/components/ProductCard";

type SortOption = "price-asc" | "price-desc";

export default function ProductList() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("price-asc");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setError(false);
      setProducts(null);

      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Request failed");
        const data: Product[] = await res.json();
        if (!cancelled) setProducts(data);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    return [...products].sort((a, b) =>
      sortBy === "price-asc" ? a.price - b.price : b.price - a.price,
    );
  }, [products, sortBy]);

  if (error) {
    return (
      <p className="text-center text-navy py-12">
        Couldn&apos;t load PCs right now. Please try again later.
      </p>
    );
  }

  if (!products) {
    return <p className="text-center text-navy py-12">Loading PCs...</p>;
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
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
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
