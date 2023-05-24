import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marvel app",
  description: "Marvel app with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
