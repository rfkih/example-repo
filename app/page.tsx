"use client"; // This marks the component as a client component

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Feature from "@/components/Feature";
import GetApp from "@/components/GetApp";

export default function Home() {
  const router = useRouter();



  return (
    <>
      <h1>This is  Home</h1>
      
    </>
  );
}
