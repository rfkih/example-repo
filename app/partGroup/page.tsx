"use client";
import React from 'react'
import { useAppContext } from '../context'
import Link from 'next/link';
import Image from 'next/image';
import PartCategories from '@/components/PartCategories';

const page = () => {


  return (
    <>
      <PartCategories />
    </>
  )
}

export default page
