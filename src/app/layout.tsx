import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header"
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Demeter's Personal Website",
  description: "Website created by Jonathan Demeter showcasing his achievements, interests, creativity, and supreme ability to code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-between ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
