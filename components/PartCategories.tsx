import { useAppContext } from '@/app/context';
import Image from 'next/image';
import React from 'react'

const PartCategories = () => {

  const { type, catalogue } = useAppContext();

  const categories = [
    { id: '1', title: 'Radiator', slug: 'radiator', image: '/radiator.png' },
    { id: '2', title: 'Exhaust System', slug: 'exhaust', image: '/exhausSystem.png' },
    { id: '3', title: 'Clutch', slug: 'clutch', image: '/clutch.png' },
    { id: '4', title: 'Steering Wheel', slug: 'steering wheel', image: '/steeringWheel.png' },
    { id: '5', title: 'Wheel', slug: 'wheel', image: '/wheels.png' },
    { id: '6', title: 'Engine', slug: 'engine', image: '/engine.png' },

  ];

  return (
    <div className="flex justify-start 2xl:max-container relative flex-col lg:mb-10 lg:py-20 xl:mb-20">
     <h1 className="text-3xl font-semibold mb-6 text-gray-50">Categories</h1>
     <h4 className="px-3 py-3 regular-18 text-gray-50">{type}</h4>
      <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map(category => (
          <div key={category.id} className=" border-2 relative cursor-pointer flex flex-col justify-end rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
            <div className="relative p-4 h-48 w-full ">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg h-full  justify-center"
              />
            </div>
            <div className="p-4  flex justify-center">
              <h2 className="text-lg font-semibold text-gray-50">{category.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartCategories
