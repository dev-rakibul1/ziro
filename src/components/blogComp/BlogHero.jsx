import React from "react";
import { FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import PrimaryButton from "../share/PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../share/primaryWhiteBtn/PrimaryWhiteBtn";
import "./BlogHero.css";

const BlogHero = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    centerPadding: "60px",
    speed: 3000,
    autoplaySpeed: 4000,
    // nextArrow: <FaLongArrowAltRight className="text-sm" />,
    // prevArrow: <FaLongArrowAltLeft className="text-sm" />,
  };

  return (
    <section className="block-hero-wrap">
      <Slider {...settings}>
        <div className="relative">
          <div className="blog-hero-wrap lg:flex lg:flex-row justify-between items-center relative">
            {/* images area */}
            <div className="w-full lg:max-w-[50%] -z-[5]">
              <img
                src="../images/blog-hero.png"
                className="max-w-full h-full -z-10"
                alt=""
              />
            </div>

            {/* blog hero article */}
            <div className="w-full lg:max-w-[50%] p-4 z-30">
              <h6 className="text-[#F4874A]">FEATURED EVENTS</h6>
              <h2 className="text-white text-4xl font-semibold mt-4">
                Ziro Worldwide Freelancers Meetup Indonesia 2020
              </h2>

              <div className="date-time mt-4 text-[#B8AEF5] font-semibold">
                <span className="">Saturday, November 28th, 2020</span>
                <span>Jakarta, Indonesia</span>
              </div>

              {/* blog paragraph */}
              <div className="text-[#B8AEF5] font-normal text-[14px] mt-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="blog-hero-progress mt-7"></div>
              <div className="flex items-center text-white justify-between max-w-[500px] mt-2">
                <p>Tickets</p>
                <p>34 left</p>
              </div>

              {/* blog hero button area */}
              <div className="mt-7">
                <span className="mr-7">
                  <PrimaryButton>Book now</PrimaryButton>
                </span>
                <PrimaryWhiteBtn>
                  <span className="flex items-center justify-between">
                    <FaHeart className="mr-4" /> Bookmark
                  </span>
                </PrimaryWhiteBtn>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="blog-hero-wrap lg:flex lg:flex-row justify-between items-center relative">
            {/* images area */}
            <div className="w-full lg:max-w-[50%] -z-[5]">
              <img
                src="../images/blog-hero.png"
                className="max-w-full h-full -z-10"
                alt=""
              />
            </div>

            {/* blog hero article */}
            <div className="w-full lg:max-w-[50%] p-4 z-30">
              <h6 className="text-[#F4874A]">FEATURED EVENTS</h6>
              <h2 className="text-white text-4xl font-semibold mt-4">
                Ziro Worldwide Freelancers Meetup Indonesia 2020
              </h2>

              <div className="date-time mt-4 text-[#B8AEF5] font-semibold">
                <span className="">Saturday, November 28th, 2020</span>
                <span>Jakarta, Indonesia</span>
              </div>

              {/* blog paragraph */}
              <div className="text-[#B8AEF5] font-normal text-[14px] mt-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="blog-hero-progress mt-7"></div>
              <div className="flex items-center text-white justify-between max-w-[500px] mt-2">
                <p>Tickets</p>
                <p>34 left</p>
              </div>

              {/* blog hero button area */}
              <div className="mt-7">
                <span className="mr-7">
                  <PrimaryButton>Book now</PrimaryButton>
                </span>
                <PrimaryWhiteBtn>
                  <span className="flex items-center justify-between">
                    <FaHeart className="mr-4" /> Bookmark
                  </span>
                </PrimaryWhiteBtn>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default BlogHero;
