import React from 'react'
import { useState,useEffect } from 'react'
const Display = () => {
    
    const [data,setData]=useState()

    async function aptdata(){
        const res=await fetch('https://dummyjson.com/product?limit=6')
        const json=await res.json()
        setData(json.products)        
    }

    useEffect(()=>{
        aptdata()
    },[])


  return (
    <div className='py-5'>
        <h1>This is Display page</h1>
        <div className='w-4/5 h-auto bg-slate-600 mx-auto py-5 px-2 grid gap-5 grid-cols-3'>
        {
            data ? data.map((item)=>(        <>
                <div className='w-5/6 h-full shadow-lg px-5 mx-auto text-center bg-slate-300 rounded-lg'>
                <h1 className='py-2 text-2xl' key={item.id}>{item.title}</h1>
                <h1 className='py-2 font-semibold text-xl'>Price: {item.price}</h1>
                <img className='w-32 h-32 object-fill py-2 px-5 pb-5 rounded-xl mx-auto text-center items-center ' src={item.images[1]} alt={item.name} />
                {/* <h1 className='text-xl pb-2 font-semibold'>Description</h1>
                <h1 className='pb-5'>{item.description}</h1> */}
                </div>
                </>))
                :null
        }
        </div>
     </div>
  )
}

export default Display