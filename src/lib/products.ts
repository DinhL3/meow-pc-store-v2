/* server-side data access.
It queries the database directly via db.orm.public.Product (Prisma 8's ORM API)
and maps raw DB rows to the app's Product type */
import { db } from "@/prisma/db";
import type { Product } from "@/data/product.types";

type ProductRow = {
  id: string;
  name: string;
  tags: readonly string[];
  price: number;
  currency: string;
  description: string;
  componentsJson: string | null;
  images: readonly string[];
  isAvailable: boolean;
  isVisible: boolean;
};

function mapRow(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    tags: [...row.tags],
    price: row.price,
    currency: row.currency,
    description: row.description,
    components: row.componentsJson ? JSON.parse(row.componentsJson) : undefined,
    images: [...row.images],
    isAvailable: row.isAvailable,
    isVisible: row.isVisible,
  };
}

export async function getVisibleProducts(): Promise<Product[]> {
  const rows = await db.orm.public.Product.where({ isVisible: true }).all();
  return rows.map(mapRow);
}

export async function getProductById(id: string): Promise<Product | null> {
  const row = await db.orm.public.Product.where({ id }).all().first();
  if (!row || !row.isVisible) return null;
  return mapRow(row);
}
