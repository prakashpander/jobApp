import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function PauseOnHover() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
     
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // ✅ Yaha pe images ka array banaya hai
  const images = [
    {city : "Banglore", job : "23 Jobs",image : "https://jobx-app.vercel.app/static/media/Bengaluru.5b1620c4379a4f2a873c.png"}, 
    {city : "Bhopal", job : "40 Jobs",image : "https://jobx-app.vercel.app/static/media/Gwalior.49ff4554ba1c777a2fc9.png"}, 
    {city : "Gwalior", job : "83 Jobs",image : "https://jobx-app.vercel.app/static/media/bhopal.2c87af791a94fa10a21e.png"},
    {city : "Jabalpur", job : "20 Jobs",image : "https://jobx-app.vercel.app/static/media/jabalpur.30c05dbdc28287e5dd9c.png"},
    {city : "Kolkata", job : "90 Jobs",image : "https://jobx-app.vercel.app/static/media/kolkata.6fe209d921d634345bea.png"}, 
    {city : "Noida", job : "10 Jobs",image : "https://jobx-app.vercel.app/static/media/noida.3fabae3d5f2fcac124d5.png"},
  ];
  

  return (
    <div className="slider-container mx-auto mt-2 ">
      <Slider {...settings} className="h-83 w-67 m-auto sm:w-148 sm:m-auto md:w-178 md:m-auto lg:w-240 ">
        {images.map((imgSrc, index) => (
          <Link key={index} className="px-2 lg:mr-98 " to="/Second_page">
            <img src={imgSrc.image} alt={`Slide ${index + 1}`} className="h-80 " />
            <h1 className="bottom-19 relative text-white left-2.5 text-2xl font-bold ">{imgSrc.city}</h1>
            <button className="bottom-18 relative left-2.5 p-1 pl-2 pr-2 rounded text-white font-bold cursor-pointer bg-orange-400 ">{imgSrc.job}</button>
           
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
