// import { useState } from "react";
// import { FaProductHunt } from "react-icons/fa6";
// import { BsAndroid2 } from "react-icons/bs";
// import { Link } from "react-router-dom";



// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-black text-white flex justify-between h-20 items-center px-5 relative p-2 z-10">
//       <h1 className="text-xl font-bold"><BsAndroid2 className="text-3xl text-green-300"/></h1>
      
//       <button onClick={() => setIsOpen(!isOpen)} className={`text-xl cursor-pointer md:hidden ${isOpen ? "rotate-90" : "left-[-100%]"}`} >
//         <i className="fa-solid fa-bars"></i>
//       </button>

//       <ul
//         className={`md:flex md:static md:flex-row md:gap-5 
//         absolute top-20 left-0  text-center transition-all duration-300 items-center md:justify-start
//         ${isOpen ? "left-0 w-full bg-black" : "left-[-100%]"}`}
//       >
//         {['Home', 'About', 'Service', 'Contact'].map((item) => (
//           <li key={item} className="cursor-pointer p-5 md:p-0 hover:text-orange-500 font-semibold">
//             {item}
//           </li>
//         ))}
//       </ul>
//         <FaProductHunt className="text-4xl items-center text-gray-300 mr-2 hidden sm:block"/>
//     </div>
//   );
// }


import { FaProductHunt } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiFillAndroid } from "react-icons/ai";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="bg-black text-white flex justify-between h-20 items-center px-5 relative p-2 z-10">
        <h1 className="text-xl font-bold"><AiFillAndroid className="text-3xl text-green-300"/></h1>
        
        <button onClick={() => setIsOpen(!isOpen)} className={`text-xl cursor-pointer md:hidden ${isOpen ? "rotate-90" : "left-[-100%]"}`} >
       <i className="fa-solid fa-bars"></i>
      </button>
      
      <ul
         className={`md:flex md:static md:flex-row md:gap-5 
         absolute top-20 left-0  text-center transition-all duration-300 items-center md:justify-start
         ${isOpen ? "left-0 w-full bg-black" : "left-[-100%]"}`}
       >
          <li className="my-10 md:my-0 hover:text-orange-600 font-semibold cursor-pointer">
            <Link to = "/">Home</Link>
          </li>
          <li className="my-10 md:my-0 hover:text-orange-600 font-semibold cursor-pointer">
            <Link to ="/about">About</Link>
          </li>
          <li className="my-10 md:my-0 hover:text-orange-600 font-semibold cursor-pointer">
            <Link to = "/service">Service</Link>
          </li>
          <li className="my-10 md:my-0 hover:text-orange-600 font-semibold cursor-pointer">
            <Link to = "/contact">Contact</Link>
          </li>
        </ul>
      </div>
  );
};

export default App;
