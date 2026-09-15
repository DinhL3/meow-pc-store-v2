import { db } from "../prisma/db";
import { mockPCProducts } from "../data/product.mock";

for (const product of mockPCProducts) {
  await db.orm.public.Product.create({
    id: product.id,
    name: product.name,
    tags: product.tags,
    price: product.price,
    currency: product.currency,
    description: product.description,
    componentsJson: product.components
      ? JSON.stringify(product.components)
      : null,
    images: product.images,
    isAvailable: product.isAvailable,
    isVisible: product.isVisible,
    createdAt: product.createdAt,
  });
  console.log(`Seeded ${product.id}`);
}

console.log("Done.");
await db.close();
