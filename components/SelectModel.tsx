"use client"
import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'
import { MODELS } from '@/constants'
import { useState, useEffect  } from 'react';
import Car from './Car'
import { GetServerSideProps } from 'next';
import axiosInstance from '../app/lib/axiosInstance';
import { CreatePostRequest, CreatePostResponse } from '../app/type/TypeInfo';
import axios from 'axios';


type SelectModelProps = {
    location: string;
  
}

const SelectModel = ({location}: SelectModelProps) => {
    const [type, setType] = useState('3');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState<CreatePostResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const models = MODELS;


    const fetchType = async (type: string) => {
        setTitle('Fetch Type Info');
      
        try {
          const response = await axiosInstance.get<CreatePostResponse>('/info/type', {
            params: {
              type: type, // Ensure 'type' matches the parameter name expected by your API
            },
          });
      
          setResponse(response.data);
          setError(null);
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
          setResponse(null);
        }
      };


    useEffect(() => {

        fetchType(type);
       
      }, [type]);
    
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
            <Car/> 
        </div>
        
   </section>
  )
}

export default SelectModel
