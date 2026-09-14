import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "meow-pc-store-v2",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
