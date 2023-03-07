import React, { useState } from "react";
import {
  FaCheck,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaPlay,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import Slider from "react-slick";
import PrimaryButton from "../../share/PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../../share/primaryWhiteBtn/PrimaryWhiteBtn";

import "./HeroSlide.css";
const heroImage = "https://i.ibb.co/m0fq53T/hero-Image-1.png";
const userImage =
  "https://media.licdn.com/dms/image/C5603AQFXf0l4Jz5d4w/profile-displayphoto-shrink_800_800/0/1517278190996?e=1683158400&v=beta&t=ZDsa8ePsSjq6ZKHRTBznu4Lf95imsSfz3M34wGxfd1s";
const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState("");
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: !0,
    cssEase: "linear",
    nextArrow: <FaLongArrowAltRight className="text-sm" />,
    prevArrow: <FaLongArrowAltLeft className="text-sm" />,
    // afterChange: (currentValue) => setCurrentSlide(currentValue),

    beforeChange: (currentSlide, nextSlide) => {
      const slides = document.querySelectorAll(".animated");

      // Apply fadeOut animation to current slide
      slides[currentSlide].classList.add("fadeOut");

      // Apply fadeIn animation to next slide
      slides[nextSlide].classList.add("fadeIn");
    },

    afterChange: function (currentSlide) {
      const slides = document.querySelectorAll(".animated");

      // Remove fadeIn and fadeOut animations from all slides
      slides.forEach((slide) => {
        slide.classList.remove("fadeIn");
        slide.classList.remove("fadeOut");
      });

      // Apply fadeIn animation to current slide
      slides[currentSlide].classList.add("fadeIn");
    },
  };

  return (
    <>
      <Slider {...settings}>
        {/* slide items 1 */}
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              {/* hero images */}
              <div className="relative">
                <img
                  src="../images/jobHeroBg.png"
                  className="max-w-full"
                  alt="hero images"
                />

                {/* hero user area */}
                <div className="hero-user-card flex items-center justify-between max-w-[60%] gap-4 bg-slate-200 p-2 absolute left-0 bottom-[25%] rounded-lg">
                  {/* image */}
                  <div className="max-w-[60px] ">
                    <img
                      src={userImage}
                      alt="user images"
                      className="max-w-full rounded-full"
                    />
                  </div>
                  {/* article */}
                  <div>
                    <h1 className="font-bold text-md">Abu Hayat</h1>
                    <p className="text-xs font-light">
                      PHP/Wordpress developer
                    </p>
                    <div className="rating text-xs">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                  </div>

                  {/* check and close */}
                  <div className="flex">
                    <span className="m-2 w-8 h-8 border border-[#30C736] flex items-center justify-center rounded-full  cursor-pointer text-[#30C736]">
                      <FaCheck />
                    </span>
                    <span className="m-2 w-8 h-8 border border-[#FF5353] flex items-center justify-center rounded-full cursor-pointer text-[#FF5353]">
                      <FaTimes />
                    </span>
                  </div>
                </div>
              </div>

              {/* hero article */}
              <div>
                <h1 className="font-semibold text-5xl animated ">
                  Find out{" "}
                  <span className="text-[#5F4BDB]">
                    talented <br /> freelancer
                  </span>{" "}
                  with better <br /> review faster
                </h1>
                <p className="py-6 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="p-2">
                  <PrimaryButton className="">Download now</PrimaryButton>
                  <PrimaryWhiteBtn className="ml-2">
                    <span className="flex items-center justify-between">
                      <span className="w-5 h-5 rounded-full p-[5px] border border-[#5F4BDB] flex items-center justify-center text-[#5F4BDB]">
                        <FaPlay />
                      </span>
                      <span className="ml-4">Watch Demo</span>
                    </span>{" "}
                  </PrimaryWhiteBtn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide items 02 */}
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              {/* hero images */}
              <div className="relative">
                <img src={heroImage} className="max-w-full" alt="hero images" />

                {/* hero user area */}
                <div className="hero-user-card flex items-center justify-between max-w-[60%] gap-4 bg-slate-200 p-2 absolute left-0 bottom-[25%] rounded-lg">
                  {/* image */}
                  <div className="max-w-[60px] ">
                    <img
                      src={userImage}
                      alt="user images"
                      className="max-w-full rounded-full"
                    />
                  </div>
                  {/* article */}
                  <div>
                    <h1 className="font-bold text-md">Abu Hayat</h1>
                    <p className="text-xs font-light">
                      PHP/Wordpress developer
                    </p>
                    <div className="rating text-xs">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                  </div>

                  {/* check and close */}
                  <div className="flex">
                    <span className="m-2 w-8 h-8 border border-[#30C736] flex items-center justify-center rounded-full  cursor-pointer text-[#30C736]">
                      <FaCheck />
                    </span>
                    <span className="m-2 w-8 h-8 border border-[#FF5353] flex items-center justify-center rounded-full cursor-pointer text-[#FF5353]">
                      <FaTimes />
                    </span>
                  </div>
                </div>
              </div>

              {/* hero article */}
              <div>
                <h1 className="font-semibold text-5xl animated">
                  Most reviewer talented freelancer
                </h1>
                <p className="py-6 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="p-2">
                  <PrimaryButton className="">Download now</PrimaryButton>
                  <PrimaryWhiteBtn className="ml-2">
                    <span className="flex items-center justify-between">
                      <span className="w-5 h-5 rounded-full p-[5px] border border-[#5F4BDB] flex items-center justify-center text-[#5F4BDB]">
                        <FaPlay />
                      </span>
                      <span className="ml-4">Watch Demo</span>
                    </span>{" "}
                  </PrimaryWhiteBtn>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide items 03 */}
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              {/* hero images */}
              <div className="relative">
                <img src={heroImage} className="max-w-full" alt="hero images" />

                {/* hero user area */}
                <div className="hero-user-card flex items-center justify-between max-w-[60%] gap-4 bg-slate-200 p-2 absolute left-0 bottom-[25%] rounded-lg">
                  {/* image */}
                  <div className="max-w-[60px] ">
                    <img
                      src={userImage}
                      alt="user images"
                      className="max-w-full rounded-full"
                    />
                  </div>
                  {/* article */}
                  <div>
                    <h1 className="font-bold text-md">Abu Hayat</h1>
                    <p className="text-xs font-light">
                      PHP/Wordpress developer
                    </p>
                    <div className="rating text-xs">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                  </div>

                  {/* check and close */}
                  <div className="flex">
                    <span className="m-2 w-8 h-8 border border-[#30C736] flex items-center justify-center rounded-full  cursor-pointer text-[#30C736]">
                      <FaCheck />
                    </span>
                    <span className="m-2 w-8 h-8 border border-[#FF5353] flex items-center justify-center rounded-full cursor-pointer text-[#FF5353]">
                      <FaTimes />
                    </span>
                  </div>
                </div>
              </div>

              {/* hero article */}
              <div>
                <h1 className="font-semibold text-5xl animated ">
                  Find out{" "}
                  <span className="text-[#5F4BDB]">
                    talented <br /> freelancer
                  </span>{" "}
                  with better <br /> review faster
                </h1>
                <p className="py-6 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="p-2">
                  <PrimaryButton className="">Download now</PrimaryButton>
                  <PrimaryWhiteBtn className="ml-2">
                    <span className="flex items-center justify-between">
                      <span className="w-5 h-5 rounded-full p-[5px] border border-[#5F4BDB] flex items-center justify-center text-[#5F4BDB]">
                        <FaPlay />
                      </span>
                      <span className="ml-4">Watch Demo</span>
                    </span>{" "}
                  </PrimaryWhiteBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default HeroSlide;
