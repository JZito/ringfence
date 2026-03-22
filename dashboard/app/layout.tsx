import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ringfence Monitor",
  description: "Agent treasury monitor — live onchain state for Ringfence governance system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
