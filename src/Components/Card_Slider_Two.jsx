
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Card_Slider_Two() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
        { title: "HP"},
        { title: "IBM" },
        { title: "FaceBook" },
        { title: "Apple" },
        { title: "Google"},
        { title: "Amazon" },
    ];


    return (
        <div className="slider-container mx-auto mt-2 ">
            <Slider {...settings} className="h-88 w-67 m-auto sm:w-148 sm:m-auto md:w-178 md:m-auto lg:w-240 ">
                {images.map((imgSrc, index) => (
                    <Link key={index} className="px-2 lg:mr-98"  to = "/Second_page ">
                        <div className="border-2 border-[#ad9e9e] h-79 md:h-78 w-full rounded-xl mt-5">
                            <div className="flex justify-around text-center mt-2">
                                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s" alt="" className="h-26 w-26 rounded-2xl"/></div>
                                
                            </div>

                            <div className="flex flex-col mt-3 justify-start pl-5">
                                <h1 className="font-bold text-2xl text-center mr-3">{imgSrc.title}</h1>
                                <p className=" mt-2 text-center text-red-500 mr-3">
                                 Link To Apply
                                </p>
                                
                                
                            </div>

                            <div className="flex justify-around border-t-2 mt-17 items-center border-[#ad9e9e] hover:bg-amber-400 hover:font-bold cursor-pointer">
                                <p className="text-center p-3 border-[#ad9e9e]">APPLY NOW</p>
                                
                            </div>

                        </div>


                    </Link>
                ))}
            </Slider>
        </div>
    );
}


export default Card_Slider_Two


