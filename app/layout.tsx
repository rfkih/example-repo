import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect  } from 'react';



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
        <Navbar/>
        <main className="relateive overflow-hidden">
        {children}
        </main>
       
        
      </body>
    </html>
  );
}
