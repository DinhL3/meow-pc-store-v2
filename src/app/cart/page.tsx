'use client';

import Image from 'next/image';
import { useCartStore } from '@/store/cart-store';
import { useCartHydration } from '@/store/cart-hydration';

export default function CartPage() {
  const hydrated = useCartHydration();
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  if (!hydrated) return null;

  if (items.length === 0) {
    return <p className="text-center py-12 text-navy">Your cart is empty.</p>;
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-navy mb-6">Your Cart</h1>

      {items.map((item) => (
        <div key={item.productId} className="flex items-center gap-4 border-b border-powder-blue py-4">
          <div className="relative w-20 h-20 shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="80px"
              className="object-cover rounded"
            />
          </div>

          <div className="flex-1">
            <p className="text-navy font-medium">{item.name}</p>
            <p className="text-ocean-blue">
              {new Intl.NumberFormat('fi-FI', {
                style: 'currency',
                currency: item.currency,
                maximumFractionDigits: 0,
              }).format(item.price)}
            </p>
          </div>

          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
            className="w-16 border border-ocean-blue rounded px-2 py-1 text-center text-navy"
          />

          <button
            type="button"
            onClick={() => removeItem(item.productId)}
            className="text-coral-red text-sm cursor-pointer"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 flex justify-between text-xl font-semibold text-navy">
        <span>Total</span>
        <span>
          {new Intl.NumberFormat('fi-FI', {
            style: 'currency',
            currency: items[0]?.currency ?? 'EUR',
            maximumFractionDigits: 0,
          }).format(total)}
        </span>
      </div>
    </div>
  );
}
