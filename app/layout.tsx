import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from './providers';
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from "../config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    config,
    headers().get('cookie')
  )
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-slate-800">
        <Providers initialState={initialState}>
          <Header />
              <div>
                {children}
              </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}