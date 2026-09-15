"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center py-12">
      <p className="text-navy mb-4">
        Couldn&apos;t load this PC right now. Please try again later.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="rounded-full bg-coral-red text-white px-6 py-2 font-medium"
      >
        Try again
      </button>
    </div>
  );
}
