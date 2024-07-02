import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers  from "@/app/providers/Providers"
import NavBar from "@/components/navbar/NavBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDb clone",
  description: "This is a movie database clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Header/>
            <NavBar/>
            {children}
        </Providers>
        </body>
    </html>
  );
}
