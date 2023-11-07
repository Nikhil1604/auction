import React from 'react'
import { useEffect,useState } from 'react'

const Category = () => {
  
    const [data,setData]=useState()

    async function apidata(){
        const res=await fetch('https://dummyjson.com/products/categories')
        const json=await res.json()
        setData(json)
        console.log(data)
    }

    useEffect(()=>{
        apidata()
    },[])

    return (
    <div className='w-4/5 mx-auto bg-slate-800/90 text-yellow-50 h-auto'>
        <h1 className='text-2xl py-5'>This is a category page</h1>
        <ul className='grid grid-cols-4 pb-5 mx-2 text-center'>
            { data ? data.map((item)=>
                <li>
                    <p className='text-xl p-2 border-2 rounded-lg m-2 bg-blue-800 border-blue-800 capitalize'>{item}</p>
                </li>
            ) 
            
            : null}
        </ul>
    </div>
  )
}

export default Category