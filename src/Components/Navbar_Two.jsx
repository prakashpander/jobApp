import React from 'react'
import { Link } from 'react-router-dom'

const Navbar_Two = () => {
  return (
    <>
    <div className="bg-[#343444] text-white flex flex-col h-43 gap-2.5 items-center px-5 relative p-2 mt-11 sm:flex sm:flex-row sm:justify-around sm:h-20">
         <h1 className="text-xl">100+ Registered Members</h1>
         <h1 className="text-1xl">300 Jobs Found</h1>
         <h1 className="text-xl">632 Best Companies</h1>
          <button className='bg-orange-500 p-2 pl-3 pr-3 rounded-lg cursor-pointer font-bold'><Link to = "/Second_page">Post A Job</Link></button>
       </div>
    </>
  )
}

export default Navbar_Two