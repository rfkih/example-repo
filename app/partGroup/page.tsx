"use client";
import React from 'react'
import { useAppContext } from '../context'
import Link from 'next/link';
import Image from 'next/image';
import PartCategories from '@/components/PartCategories';

const page = () => {

  const { type, catalogue } = useAppContext();

  const categories = [
    { id: '1', title: 'Radiator', slug: 'radiator', image: '/radiator.png' },
    { id: '2', title: 'Exhaust System', slug: 'exhaust', image: '/exhausSystem.png' },
    { id: '3', title: 'Clutch', slug: 'clutch', image: '/clutch.png' },
    { id: '4', title: 'Steering Wheel', slug: 'steering wheel', image: '/steeringWheel.png' },
    { id: '5', title: 'Wheel', slug: 'wheel', image: '/wheels.png' },
    { id: '6', title: 'Engine', slug: 'engine', image: '/engine.png' },
    // Add more categories as needed
  ];

  return (
    <>
      <PartCategories/>
    </>
  )
}

export default page
