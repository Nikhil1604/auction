import React from 'react'

const Sell = () => { 
  return (
    <div className='w-4/5 mx-auto bg-lime-300 text-center py-5'>
    <div className='flex flex-col'>
        <h1>This is a Sell Page</h1>
        <p>Please Enter the Product Details below</p>
        <div className='w-2/5 mx-auto flex'>
        {/* Product Name */}
        <div className='text-start py-5 mx-auto flex flex-col w-full'>
          <h1 className='px-2 my-2'>Product Name :</h1>
          <h1 className='px-2 my-2'>Product Price :</h1>
          <h1 className='px-2 my-2'>Description :</h1>
          <h1 className='px-2 my-2'>Upload Image</h1>
        </div>
        {/* Product Price */}
        <div className='justify-center py-5 mx-auto flex flex-col'>
        <input className='my-2 ps-2' type="text" placeholder='Product Name' />
          <input className='my-2 ps-2' type="text" placeholder='Price' />
          <input className='my-2 w-80 ps-2 text-start' type="text" placeholder='Description' />
          <input type="file" placeholder='Upload' />
        </div>
        {/* <button >Sell the Product</button> */}
        
        </div>
    </div>
    {/* button */}
    <div className='w-full'>
          <button className='w-48 h-10 bg-slate-300 border-2 border-slate-300 hover:bg-slate-400 hover:border-slate-400 hover:text-white rounded-md'>Upload the product</button>
        </div>
    </div>
  )
}

export default Sell