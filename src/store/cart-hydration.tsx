'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from './cart-store';

export function useCartHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubscribe = useCartStore.persist.onFinishHydration(() => setHydrated(true));
    void useCartStore.persist.rehydrate();
    return unsubscribe;
  }, []);

  return hydrated;
}
