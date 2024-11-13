import React, { Suspense } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Bars
//import Workbar from './components/workbar/workbar';
import Navbar from './components/navigation/navbar/Navbar'; // Pfad zur Navbar-Komponente anpassen
import Footer from './components/footer/footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coworking Spaces Test",
  description: "Coworking Spaces Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}