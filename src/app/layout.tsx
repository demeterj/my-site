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
      <body className={`${inter.className}`}>
        <div className="fixed h-full w-full bg-transparent border-solid border-white border-[length:--page-border-w] z-[1000] pointer-events-none"></div>
        <div className="absolute h-full w-full overflow-scroll p-[--page-border-w]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
