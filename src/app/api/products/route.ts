import { NextResponse } from "next/server";
import { getVisibleProducts } from "@/lib/products";

export async function GET() {
  try {
    const products = await getVisibleProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
