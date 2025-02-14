import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsColumnsGap } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Second_page = () => {

    const cards = [
        { id: 1, Rol: "React Devloper", city: "Bhopal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s" },
        { id: 19, Rol: "Js Devloper", city: "Ajmer", image: "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg" },
        { id: 20, Rol: "Node Js Devloper", city: "Sikar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s" },
    ]


    return (
        <>
            <div className='flex flex-col sm:flex sm:flex-row gap-3 lg:gap-15 mt-4'>
                <div className='border-2 sm:ml-0 h-fit p-2 w-75 ml-2 lg:ml-7'>
                    <ul className='list-none flex justify-around gap-5 mb-2 border-b-2 border-b-zinc-300 p-3'>
                        <li className='font-bold cursor-pointer '>Filters</li>
                        <li className='cursor-pointer '>Clear All Filters</li>
                    </ul>
                    <ul className='mb-4 border-b-2 border-b-zinc-300 p-2 text-center'>
                        <ul className='flex justify-around gap-15 mt-3 mb-2'>
                            <li className='font-bold cursor-pointer'>Skills</li>
                            <li className='cursor-pointer'>Clear</li>
                        </ul>
                        <input type="text" placeholder='SKILLs' className='border-2 border-zinc-300 mt-3 mb-2 placeholder:pl-1 w-65 rounded' />
                    </ul>
                    <ul className='flex justify-around'>
                        <li className='font-bold cursor-pointer'>Availability</li>
                        <li className='cursor-pointer'>Clear</li>
                    </ul>
                    <ul className='p-1 mb-3 mr-7 border-b-2 border-b-zinc-300 w-69 lg:w-70'>
                        <li className='mr-5'><input type="checkbox" className='mr-2' />Full Time</li>
                        <li><input type="checkbox" className='mr-2 ' />Part Time</li>
                        <li><input type="checkbox" className='mr-2' />Intership</li>
                        <li><input type="checkbox" className='mr-2' />Contract</li>
                        <li><input type="checkbox" className='mr-2' />Freelancer</li>
                        <li><input type="checkbox" className='mr-2' />Volunteer</li>
                        <li><input type="checkbox" className='mr-2' />Temporary</li>
                        <li><input type="checkbox" className='mr-2' />Remote</li>
                        <li><input type="checkbox" className='mr-2' />On-site</li>
                        <li><input type="checkbox" className='mr-2 mb-6' />Hybrid</li>
                    </ul>
                    <ul className='border-b-2 border-b-zinc-300 text-center p-3'>
                        <ul className='flex justify-around mb-7'>
                            <li className='font-bold cursor-pointer'>Category</li>
                            <li className='cursor-pointer'>Clear</li>
                        </ul>
                        <input type="text" placeholder='Category' className='border-2 border-zinc-300 w-66 rounded placeholder:pl-1 mb-3' />
                    </ul>

                    <ul className='border-b-2 border-b-zinc-300 text-center p-3'>
                        <ul className='flex justify-around mb-7'>
                            <li className='font-bold cursor-pointer'>Experience</li>
                            <li className='cursor-pointer'>Clear</li>
                        </ul>
                        <input type="text" placeholder='Experience' className='border-2 border-zinc-300 w-66 rounded placeholder:pl-1 mb-3' />
                    </ul>

                    <ul className='text-center'>
                        <ul className='flex justify-around mb-7 mt-2'>
                            <li className='font-bold cursor-pointer'>Location</li>
                            <li className='cursor-pointer'>Clear</li>
                        </ul>
                        <input type="text" placeholder='Location' className='border-2 border-zinc-300 w-66 rounded placeholder:pl-1 mb-3' />
                    </ul>
                    <button className='bg-orange-400 p-1.5 w-full mt-4 font-bold rounded text-white cursor-pointer'>SEARCH NOW</button>
                </div>

                <div className='w-full lg:mr-5'>
                    <div className='flex flex-col lg:ml-15 gap-6 lg:flex-row sm:ml-0  items-center justify-around '>
                        <p className='mr-2 text-orange-400 underline font-bold'>Jobs</p>
                        <div className='flex border-1 border-zinc-300 h-10 items-center mr-3 ml-3 gap-3'>
                            <ul className='flex'>
                                <li> <p className='ml-1'><CiSearch className='mt-1' /></p></li>
                                <li className='ml-1'><input type="text" placeholder='SEARCH' className='outline-none' /></li>
                            </ul>
                            <button className='bg-amber-400 p-1.5 pl-4 pr-3 rounded text-white cursor-pointer'>SEARCH</button>
                        </div>
                        <div className='flex '>
                            <select name="" id="" className='mr-4 border-2 rounded'>
                                <option value="" disabled>Sort by</option>
                                <option value="">A-Z</option>
                                <option value="">Z-A</option>
                            </select>
                            <p><IoReorderThreeOutline className='text-2xl mr-3 cursor-pointer' /></p>
                            <p><BsColumnsGap className='mt-1 cursor-pointer' /></p>
                        </div>

                    </div>

                    {cards.map((values) => {
                        return (
                            <div key={values.id} className='border-2 mt-7 border-zinc-300'>
                                <div className='flex justify-between p-2 mt-2 mb-2'>
                                    <p className='ml-3'><img src={values.image} alt="" className='h-20 rounded-2xl' /></p>
                                    <ul className='mr-4'>
                                        <li>Payment not Disclosed</li>
                                        <li className='bg-amber-500 pl-3 rounded-2xl'>Full time/onsite</li>
                                    </ul>
                                </div>

                                <div className='ml-5 mb-12 mt-3'>
                                    <h1 className='font-bold text-2xl'>{values.Rol}</h1>
                                    <ul className='flex mt-2 mb-2'>
                                        <li><IoLocationSharp className='mt-1.5' /></li>
                                        <li>{values.city}</li>
                                    </ul>
                                    <p>Immidiate Joiner</p>
                                </div>

                                <div className='flex gap-6 border-t-2 justify-evenly sm:justify-evenly items-center text-center border-zinc-300'>
                                    <p className='border-r-2 p-4 sm:p-3 sm:pr-29 cursor-pointer border-zinc-300 hover:font-bold'>APPLY JOB</p>
                                    <p className='border-r-2 p-4 sm:p-3 sm:pr-30 cursor-pointer border-zinc-300 hover:font-bold'> VIEW JOB</p>
                                    <p className='pr-5 cursor-pointer hover:text-red-500'><IoMdHeart className='text-2xl hover:text-red-500' /></p>
                                </div>

                            </div>
                        ) 
                    })}

                </div>
            </div>
        </>
    )
}
export default Second_page