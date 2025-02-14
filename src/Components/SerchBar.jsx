import React from 'react'

const SerchBar = () => {
  return (
    <>
    <div className='bg-orange-300'>
<div className='flex justify-around items-center h-50 col-end-1 flex-col md:flex-row p-2 md:h-15'>
<input type="text" className='bg-white border-2 rounded-md m-2 w-full md:w-3xs  placeholder:text-black placeholder:text-lg placeholder:pl-2' placeholder='Select Job Role..'/>
<input type="text" className='bg-white border-2 rounded-md m-2  w-full md:w-3xs  placeholder:text-black placeholder:text-lg placeholder:pl-2' placeholder='Select Location..'/>
<input type="text" className='bg-white border-2 rounded-md m-2 w-full md:w-3xs placeholder:text-black placeholder:text-lg placeholder:pl-2' placeholder='Select Category..'/>
<button className='font-bold border-2 pl-3.5 pr-3.5 bg-orange-500 rounded-xl p-1 cursor-pointer hover:bg-black hover:text-white sm:pr-3.5 sm:p-0.5 sm:pl-3.5 sm:h-11 sm:font-bold sm:text-sm'>Search Jobs</button>
</div>
    </div>
    </>
  )
}
export default SerchBar