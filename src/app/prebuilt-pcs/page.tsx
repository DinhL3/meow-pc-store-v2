import ProductList from "@/components/ProductList";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="mt-8 mb-4 text-center text-3xl font-semibold text-navy">
        Ready-to-play Gaming PCs
      </h1>

      <ProductList />
    </div>
  );
}
