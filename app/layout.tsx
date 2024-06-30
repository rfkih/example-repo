import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect  } from 'react';
import { AppWrapper } from "./context";



export const metadata: Metadata = {
  title: "BMW Dealer",
  description: "BMW Dealer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 


  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Navbar/>
          <main className="relateive overflow-hidden">
          {children}
          </main>

        </AppWrapper>
      </body>
    </html>
  );
}
