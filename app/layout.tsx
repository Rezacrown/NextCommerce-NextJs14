import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShopingCartModal";
import StripeProviders from "./components/StripeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Commerce",
  description: "NextCommerce is Shopping Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StripeProviders>
          <Navbar />
          <ShoppingCartModal />
          {children}
        </StripeProviders>
      </body>
    </html>
  );
}
