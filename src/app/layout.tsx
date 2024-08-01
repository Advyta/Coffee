import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import StoreProvider from "./StoreProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee Creations",
  description: "Create Happiness",
  icons: {
    icon: '/favicon.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
      </head>
      <StoreProvider>
        <body className={inter.className}>
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </StoreProvider>
    </html>
  );
}
