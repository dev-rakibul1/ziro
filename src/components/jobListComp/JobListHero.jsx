import React from "react";
import { Link } from "react-router-dom";
import "./JobListHero.css";

const heroImage = "https://i.ibb.co/m0fq53T/hero-Image-1.png";
const userImage =
  "https://media.licdn.com/dms/image/C5603AQFXf0l4Jz5d4w/profile-displayphoto-shrink_800_800/0/1517278190996?e=1683158400&v=beta&t=ZDsa8ePsSjq6ZKHRTBznu4Lf95imsSfz3M34wGxfd1s";
const HeroSlide = () => {
  return (
    <>
      <div>
        <div className="hero min-h-screen jobs-hero-wrapper">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* hero images */}
            <div className="md:max-w-[50%]">
              <div className="relative">
                <img
                  src="../images/jobHero/jobHeroBg.png"
                  className="max-w-full"
                  alt="hero images"
                />
              </div>
            </div>

            {/* hero article */}
            <div className="md:max-w-[50%]">
              <div>
                <h1 className="font-semibold text-5xl ">
                  Find your dream jobs through{" "}
                  <span className="text-[#5F4BDB]">Ziro</span> easily
                </h1>

                {/* job-list-hero-input  */}
                <div className="job-list-hero-input max-w-full flex items-center justify-between relative my-7">
                  <input type="text" placeholder="Enter your email address" />
                  <button className="subscribe" type="search">
                    Jobs search
                  </button>
                </div>

                {/* support list */}
                <div>
                  <ul className="flex flex-wrap items-center text-sm">
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Web Dev</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Mobile Dev</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Design</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Writing</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Admin Support</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Customer Service</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Marketing</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">Accounting</Link>
                    </li>
                    <li className="px-4 py-2 border border-gray-200 hover:border-[#5B48D2] hover:text-[#5B48D2] font-semibold m-[8px] rounded-full">
                      <Link to="/">View all catagories</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlide;
