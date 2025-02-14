import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

function Card_slider() {
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
        { city: "Banglore", title: "Fronted Devloper", image:"https://avatarfiles.alphacoders.com/371/thumb-1920-371697.png" },
        { city: "Bhopal", title: "UI/Ux Designer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s" },
        { city: "Gwalior", title: "Digital Marketing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ngaqIXlg16CjkDSnFEhEA2i0A3wKTpSawA&s" },
        { city: "Jabalpur", title: "Contant Writer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUaGV0pK9JKr-1JCiD-59WyyGs8YywZ5Mlg&s" },
        { city: "Kolkata", title: "Node Js Devloper", image: "https://c8.alamy.com/comp/2BP67Y4/avatar-behind-computer-with-code-in-speech-bubble-2BP67Y4.jpg" },
        { city: "Noida", title: "React Devloper", image: "https://www.shutterstock.com/image-vector/man-black-hoodie-using-laptop-260nw-2386426789.jpg" },
    ];


    return (
        <div className="slider-container mx-auto mt-2 ">
            <Slider {...settings} className="h-88 w-67 m-auto sm:w-148 sm:m-auto md:w-178 md:m-auto lg:w-240 ">
                {images.map((imgSrc, index) => (
                    <div key={index} className="px-2 lg:mr-98 ">
                        <div className="border-2 border-[#ad9e9e] h-84 md:h-78 w-full rounded-xl mt-5">
                            <div className="flex justify-around text-center mt-2">
                                <div>
                                    <p><img src={imgSrc.image} alt="" className="h-13 w-13 rounded-2xl"/></p>
                                  
                                    </div>
                                <div>
                                    <p>Payment Not Disclosed</p>
                                    <p className="bg-orange-500 rounded-2xl mt-1">Full Time Onsite</p>
                                </div>
                            </div>

                            <div className="flex flex-col mt-11 justify-start pl-5">
                                <h1 className="font-bold text-2xl">{imgSrc.title}</h1>
                                <p className="flex items-center mt-1">
                                    <MdOutlineLocationOn className="mr-1" /> {imgSrc.city}
                                </p>
                                <p className="mt-2">Immediate Joiner</p>
                            </div>

                            <div className="flex justify-around border-t-2 mt-15 items-center border-[#ad9e9e]">
                                <p className="border-r-2 text-center p-4 border-[#ad9e9e]"><Link to = "/Second_page">APPLY NOW</Link></p>
                                <p className="border-r-2 p-4 border-[#ad9e9e]"><Link to = "Third_page">VIEW NOW</Link></p>
                                <p className="p-3 text-3xl hover:text-red-500"><GoHeartFill /></p>
                            </div>

                        </div>


                    </div>
                ))}
            </Slider>
        </div>
    );
}


export default Card_slider