import React from 'react'
import { Link } from 'react-router-dom'

const Info_Card = () => {

    const info = [
        {id : 1, title : "Apply for a good job" , lorem : "Lorem ipsum dolor, sit amet..." , read : "Read More >>"},
        {id : 2, title : "Searching the best jobs" , lorem : "Lorem ipsum dolor, sit amet..." , read : "Read More >>"},
        {id : 3, title : "More quality hires" , lorem : "Lorem ipsum dolor, sit amet..." , read : "Read More >>"},
        {id : 4, title : "Choose working hours" , lorem : "Lorem ipsum dolor, sit amet..." , read : "Read More >>"},
    ]

  return (
    <>
    <div className='bg-gray-100 pb-15 flex flex-wrap pl-20 pr-20 pt-15'>
        <div className='w-full '>
        <h1 className='text-3xl font-bold text-center mt-5 '>What we offer</h1>
        <p className='text-center mb-4'>Offering the Best Deal</p>
        </div>

        {info.map((show) => (
        <Link key={show.id} className='bg-white rounded-2xl shadow-lg pt-5 mt-3 m-auto w-70' to = "/Third_page">
            <p className='p-2 pl-10 font-bold text-xl '>{show.title}</p>
            <p className='p-2 pl-10'>{show.lorem}</p>
            <p className='p-2 pl-10 text-amber-600 cursor-pointer'>{show.read}</p>
        </Link>
    ))}
    </div>
    </>
  )
}
export default Info_Card