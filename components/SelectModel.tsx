"use client"
import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'
import { MODELS } from '@/constants'
import { useState, useEffect  } from 'react';
import Car from './Car'
import { GetServerSideProps } from 'next';
import axiosInstance from '../app/lib/axiosInstance';
import { CreatePostRequest, CreatePostResponse, CarProps } from '../app/type/TypeInfo';
import { TypeInfo, TypeInfoArray } from '@/app/dto/TypeInfo'
import axios from 'axios';
import { useAppContext } from '@/app/context'


type SelectModelProps = {
    location: string;
  
}




const SelectModel = ({location}: SelectModelProps) => {
    const [type, setType] = useState('3');
    const [body, setBody] = useState('');
    const { setCatalogue } = useAppContext();
  
    const [response, setResponse] = useState<TypeInfo[]>([]);
    const [error, setError] = useState<string | null>(null);
    const models = MODELS;

    
    const fetchType = async (type: string) => {
       
      
        try {
          const respon = await axiosInstance.get<TypeInfo[]>('/info/type', {
            params: {
              type: type, 
            },
          });


          setResponse(respon.data);
  
          setError(null);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
          setResponse([]);
        }
      };


    useEffect(() => {
        fetchType(type);
      }, [type]);

    useEffect(() => {
      setCatalogue(location);
    }, []);
    
  return (
    <section className=' flex justify-start 2xl:max-container relative flex-col lg:mb-10 lg:py-20 xl:mb-20'>
        <div className=' px-5 '>
            <h1 className='text-3xl font-bold mb-8'>Select Your Model.</h1>
            <h6 className='lg:hidden font-semibold text-gray-50'>{location}</h6>
        </div>
        <div>
           
        </div>
        <div className='  h-content'>
            <Navigation items={models} setType={setType} />
            <Car items={response} /> 
        </div>
        
   </section>
  )
}

export default SelectModel
