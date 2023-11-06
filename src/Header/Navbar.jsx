import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-4/5 mx-auto flex flex-row justify-between items-center bg-yellow-200 p-5'>
        <div className='w-3/5 text-3xl'>
          <Link to='/'>Auction House</Link>
        </div>
        <div className='w-2/5  flex flex-row justify-between text-xl'>
          <Link to='/buy'>Buy</Link>
          <Link to='/sell'>Sell</Link>
          <Link to='/auction'>Auction</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar