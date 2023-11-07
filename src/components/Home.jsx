import React from 'react'
import Display from '../partials/Display'
import Category from '../partials/Category'

const Home = () => {
  return (
    <div className='w-4/5 mx-auto bg-indigo-300 text-center'>
        <h1>This is a Home Page</h1>
        <Category />
        {/* here list of 6 product currently selling right now */}
        <Display />

        {/* here would be way to redirect to page to sell the product */}


        {/* here is the way to go auction page  */}


    </div>
  )
}

export default Home