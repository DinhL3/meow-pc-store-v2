import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import ProductDetails from "@/components/ProductDetails";

export default async function Page(props: PageProps<"/prebuilt-pcs/[id]">) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
