"use client"
import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'
import { MODELS } from '@/constants'
import { useState, useEffect  } from 'react';
import Car from './Car'

const SelectModel = () => {
    const [generation, setGeneration] = useState([]);
    const models = MODELS;


    useEffect(() => {
        console.log('clicked on child :', generation);
       
      }, [generation]);
    
  return (
    <section className=' flex justify-start 2xl:max-container relative flex-col lg:mb-10 lg:py-20 xl:mb-20'>
        <div className=' px-5 '>
            <h1 className='text-3xl font-bold mb-8'>Select Your Model.</h1>
        </div>
        <div className='  h-content'>
            <Navigation items={models} setGeneration={setGeneration} />
            <Car/> 
        </div>
        
   </section>
  )
}

export default SelectModel
