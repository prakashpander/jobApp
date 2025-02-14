import React from 'react'
import { AiFillGift } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='mt-20 mb-4 bg-amber-50'>
      
      <div className='flex justify-center gap-8 mb-15 p-4 md:flex md:justify-evenly'>
        <div className='flex flex-col'>
            <ul className='flex items-center gap-2'>
                <li className='text-3xl text-green-600'><AiFillGift /></li>
                <li className='text-2xl font-bold'>Get the latest news!</li>
            </ul>
            
            <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.</p>
        </div>
        <div className=' md:border-1 border-gray-500 cursor-pointer rounded-md flex flex-col md:p-3'>
            <input type="email" placeholder='jhon@rhpc.com' className='pr-48 outline-none hidden md:block md:pr-10 '/>
            <button className='bg-amber-500 p-2 pl-4 pr-4 font-bold rounded-md hover:bg-black hover:text-white cursor-pointer'><Link to ="/contact">SIGN UP</Link></button>
        </div>
      </div>

      <div className=' flex flex-col m-auto md:flex md:justify-evenly md:flex-row'>
        <div className='flex justify-center'>
        <ul className='cursor-pointer'>
            <li className='font-bold mb-4 flex justify-center'>Services</li>
            <li className='mt-1 mb-1'>1on1 Coaching</li>
            <li className='mt-1 mb-1'>Company Review</li>
            <li className='mt-1 mb-1'>Accounts Review</li>
            <li className='mt-1 mb-1'>HR Consulting</li>
            <li className='mt-1 mb-1'>SEO Optimisation</li>
        </ul>
        </div>

       <div className='flex justify-center mt-3 '>
       <ul className='cursor-pointer'>
            <li className='font-bold mb-4'>Company</li>
            <li className='mt-1 mb-1'>About</li>
            <li className='mt-1 mb-1'>Meet the Team</li>
            <li className='mt-1 mb-1'>Accounts Review</li>
        </ul>
       </div>

      <div className='flex justify-center mt-5'>
      <ul className='cursor-pointer'>
            <li className='font-bold mb-4'>Helpful Links</li>
            <li className='mt-1 mb-1'>Contact</li>
            <li className='mt-1 mb-1'>FAQs</li>
            <li className='mt-1 mb-1'>Live Chat</li>
        </ul>
      </div>

       <div className='flex justify-center mt-5'>
       <ul className='cursor-pointer'>
            <li className='font-bold mb-4'>Legal</li>
            <li className='mt-1 mb-1'>Accessibility</li>
            <li className='mt-1 mb-1'>Returns Policy</li>
            <li className='mt-1 mb-1'>Refund Policy</li>
            <li className='mt-1 mb-1'>Hiring Statistics</li>
        </ul>
       </div>

       <div className='flex justify-center mt-5'>
       <ul className='cursor-pointer'>
            <li className='font-bold mb-4'>Downloads</li>
            <li className='mt-1 mb-1'>Marketing Calendar</li>
            <li className='mt-1 mb-1'>SEO Infographics</li>
        </ul>
       </div>


      </div>

<ul className='flex mt-5 justify-center gap-4 text-2xl cursor-pointer md:flex md:justify-end md:mr-10'>
    <li className='text-blue-500'><FaFacebook /></li>
    <li className='text-pink-500'><FaInstagram /></li>
    <li className='text-black'><FaXTwitter /></li>
    <li><FaGithub /></li>
    <li className='text-blue-500'><FaLinkedin /></li>
</ul>


    </div>
    </>
  )
}
export default Footer