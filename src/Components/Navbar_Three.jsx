import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_Three = () => {
  return (
    <>
    <div className="text-white flex justify-around h-20 items-center px-5 relative p-2 mt-15 mb-7">
         <div className='text-black'>
         <h1 className="text-4xl font-bold">Featured Jobs</h1>
         <p className="">Your Job for a Future</p>
         </div>
          <button className='bg-orange-500 p-2 pl-3 pr-3 rounded-lg cursor-pointer font-bold'><Link to = "/Third_page">View All</Link></button>
       </div>
    
    </>
  )
}
export default Navbar_Three