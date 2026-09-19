import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/product.types";

interface ProductCardProps {
  product: Product;
  isAboveFold?: boolean;
}

export default function ProductCard({ product, isAboveFold }: ProductCardProps) {
  return (
    <Link
      href={`/prebuilt-pcs/${product.id}`}
      className="block w-[275px] rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="275px"
          loading={isAboveFold ? 'eager' : 'lazy'}
          className="object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-center p-4">
        <h3 className="text-xl font-medium text-navy mb-2">{product.name}</h3>

        <div className="flex flex-wrap justify-center gap-1 mb-2">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-sm text-navy border border-ocean-blue rounded-full px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {product.isAvailable ? (
          <p className="text-lg font-medium text-ocean-blue">
            {new Intl.NumberFormat("fi-FI", {
              style: "currency",
              currency: product.currency,
              maximumFractionDigits: 0,
            }).format(product.price)}
          </p>
        ) : (
          <p className="text-lg font-medium text-ocean-blue">Out of stock</p>
        )}
      </div>
    </Link>
  );
}
