import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <>
    <div className='flex flex-col p-3 md:flex-row md:flex  md:justify-evenly'>
        <div className='flex flex-col w-70 p-2 m-auto md:w-99 md:text-justify'>
        <p className='text-3xl font-bold mb-14'>Post Jobs</p>
        <p className='font-bold mb-2'>Quick and Easy Way to Advertise</p>
        <p>If you're looking to fill open positions with qualified and competent workers, Jobxpro is your best bet.</p>
       <p className='font-bold mt-2 mb-2'>Hire for Your company:</p>
        <p>Simply post your work specifications and due dates on our platform. You will be updated on the status of application submissions as they come in.</p>
         <p className='font-bold mt-2 mb-2'>Reach out to qualified matches:</p>
        <p>Get in touch with good fits by sorting out candidates using different criteria. There is no extra work or inconvenience involved.</p>
          <div className='flex mt-14 gap-3'>
            <button className='bg-orange-500 font-bold p-2 rounded-md cursor-pointer'><Link to = "/Second_page">POST A JOB</Link></button>
            <button className='bg-black font-bold text-white p-2 rounded-md cursor-pointer'><Link to = "/Third_page">LEARN MORE</Link></button>
          </div>

        </div>

        <div className='text-justify w-70 p-2 mt-8 m-auto md:w-99 md:mt-0'>
            <p className='text-3xl font-bold mb-6'>Talented Candidates</p>
            <p className='font-bold mb-2'>Get discovered by companies looking to hire remote :</p>
            <p>Find the best job for you by narrowing your search based on your priorities.</p>
             <p className='font-bold mb-2'>Get your profile listed:</p>
             <p>Get the attention of potential employers. Find internships and full-time positions by searching with keywords. Following your application, the recruiters will reach out to you directly.</p>
             <p className='font-bold mb-2'>Customize your profile:</p>
             <p>JobXpro's impressive customizability lets you zero in on organizations and fields that are a good fit for your expertise and interests. Learn how to use your unique set of experiences, education, and talents to pinpoint the greatest possible career path for you.</p>
             
             <div className='flex mt-3 gap-3'>
                <button className='bg-orange-500 font-bold p-2 rounded-md cursor-pointer '><Link to = "/Third_page">GET LISTED</Link></button>
                <button className='bg-black font-bold text-white p-2 rounded-md cursor-pointer'><Link to = "/contact">LEARN MORE</Link></button>
             </div>

        </div>

    </div>
    </>
  )
}
export default Content