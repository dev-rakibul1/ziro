import React from "react";
import { FaChevronDown, FaMapMarkerAlt, FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./UserSearch.css";
const userArea = "../images/bigSearch.png";

const UserSearch = () => {
  return (
    <div>
      <div
        className="user-area-top-hero flex items-center justify-between"
        style={{ backgroundImage: `url(${userArea})` }}
      >
        <div className="w-full max-w-full user-area-search-location mt-40">
          <h1 className="text-4xl font-bold md:max-w-[60%] mx-auto px-2 text-center">
            Search over <span className="text-[#5B48D2]">30,000+</span> talented
            freelancers in the world through ziro
          </h1>

          {/* filter search */}
          <div className="filter-search lg:flex items-center lg:border lg:border-gray-200 w-full md:max-w-[70%] justify-between p-1 rounded-full bg-white mt-12">
            <div className="lg:flex justify-center mr-4">
              {/* location */}
              <div className="flex items-center justify-between mr-0 lg:mr-7 text-[#343645] border-gray-300 border lg:border-none px-4 rounded-full">
                <span className="hidden lg:block">
                  <FaMapMarkerAlt className="text-[#5B48D2]" />
                </span>{" "}
                <select name="" id="" className="focus">
                  <option value="" defaultChecked>
                    Bangladesh
                  </option>
                  <option value="">India</option>
                  <option value="">Pakistan</option>
                  <option value="">Australia</option>
                  <option value="">Japan</option>
                </select>
                <span className="ml-2  text-gray-400">
                  <FaChevronDown />
                </span>
              </div>

              {/* freelancer title   */}
              <div className="flex items-center justify-between border-gray-300 border lg:border-none rounded-full px-4 mt-4 lg:mt-0">
                <select name="" id="">
                  <option value="" defaultChecked>
                    MERN stack developer
                  </option>
                  <option value="">JavaScript developer</option>
                  <option value="">Wordpress developer</option>
                  <option value="">React developer</option>
                  <option value="">Python developer</option>
                  <option value="">PHP developer</option>
                  <option value="">Java developer</option>
                </select>
                <span className="ml-2 text-gray-400">
                  <FaChevronDown />
                </span>
              </div>
            </div>

            {/* search box */}
            <div className="relative user-area-multi-search-input rounded-full w-full px-4 mt-4 lg:mt-0 border-gray-300 border lg:border-none">
              <input
                type="search"
                name=""
                id=""
                className="h-full max-w-full w-full p-4 rounded-full"
                placeholder="Search here..."
              />
              <button className="bg-orange-400 px-4 py-2 rounded-full text-white user-area-multi-search-btn text-right">
                <div className="flex items-center justify-between">
                  <span className="mr-4">Search</span> <FaSistrix />
                </div>
              </button>
            </div>
          </div>

          {/* support list */}
          <div className="w-full md:max-w-[50%] mx-auto mt-7 px-2">
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
  );
};

export default UserSearch;
