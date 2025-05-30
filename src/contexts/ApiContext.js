import React, { createContext, useEffect, useState } from 'react'
import {MyAxios} from "./MyAxios"

export const ApiContext=createContext("")
export const ApiProvider=({children})=> {
    const [szavakLista, setSzavakLista]=useState([])

    const getAdat=async(vegpont,callbackfv)=>{
        try{
            const response=await MyAxios.get(vegpont);
            console.log(response);
            callbackfv(response.data);
        }catch(err){
            console.log("Hiba történt az adatok letöltésekor",err)
        }finally{

        }
    };

    useEffect(()=>{
        getAdat("/api/szavak/tema/",setSzavakLista)
    },[]);
  return (
   <ApiContext.Provider value={{szavakLista,setSzavakLista}}>{children}</ApiContext.Provider>
  )
}
