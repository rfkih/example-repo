"use client";
import App from "next/app";
import { createContext, useState, useContext } from "react";



const AppContex = createContext<any>({});

export function AppWrapper({children} : {
    children: React.ReactNode;
  }) {
    const [ type, setType] = useState('E30');
    const [ catalogue, setCatalogue] = useState('E30');

    return (
        <AppContex.Provider value={{type, setType, catalogue, setCatalogue}}>
            {children}
        </AppContex.Provider>
    )
  }


  export function useAppContext(){
    return useContext(AppContex)
  }