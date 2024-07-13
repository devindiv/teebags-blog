import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/components/ui/fonts";
import Container from "@/components/ui/container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Teebags: Best Gift Ideas for any ocassion",
  description: "Curated best gift ideas for christmas, wedding and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="bg-gray-50">
          <Container> {children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
