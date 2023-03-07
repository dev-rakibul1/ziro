import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TopBanner.css";
const topBanner =
  "https://i.ibb.co/2Zn3F0N/laurent-cassagne-5w-Wg-GR2a-Qpg-unsplash.jpg";

const TopBanner = ({ children }) => {
  return (
    <div
      style={{ zIndex: "-50" }}
      className=" w-full md:max-w[90%] mx-auto px-2 relative"
    >
      <div
        className="top-banner bg-bottom bg-cover bg-no-repeat py-28 text-white text-center relative"
        style={{ backgroundImage: `url(${topBanner})` }}
      >
        <h3 className="text-2xl font-semibold">{children}</h3>
        <p>Jobs / Highspeed Studios / UI Designer</p>

        {/* back button */}
        <div className="absolute -top-full left-0">
          <Link
            to="/jobList"
            className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center cursor-pointer"
          >
            <FaArrowLeft />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
