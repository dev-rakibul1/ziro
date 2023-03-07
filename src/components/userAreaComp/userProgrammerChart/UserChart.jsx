import React from "react";
import { FaEllipsisH, FaStar } from "react-icons/fa";
import { programerInformation } from "../../../DummyData";

const UserChart = () => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
      {programerInformation.map((user) => (
        <div className="w-full max-w-full border border-gray-200 rounded-xl p-4 flex flex-col justify-between items-center relative">
          {/* profile area */}
          <div className="relative">
            <img src={user?.profile} alt="user" className="max-w-[113px]" />
            {user?.onlineStatus ? (
              <span className="flex items-center justify-center text-white bg-[#2EBF34] py-1 px-4 rounded-full absolute -bottom-[15px]">
                <span className="w-2 h-2 rounded-full block bg-white mr-2"></span>
                <span className="uppercase text-[12px]">Available</span>
              </span>
            ) : (
              <span className="flex items-center justify-center text-white bg-[#808080] py-1 px-4 rounded-full absolute -bottom-[15px]">
                <span className="w-2 h-2 rounded-full block bg-white mr-2"></span>
                <span className="uppercase text-[12px]">Unavailable</span>
              </span>
            )}
          </div>

          {/* name and rating */}
          <div className="mt-12 max-w-full w-full">
            <div className="flex items-center justify-center flex-col">
              <h3 className="font-semibold text-xl">{user?.name}</h3>
              <p className="text-sm font-normal">{user?.profession}</p>

              {/* rating */}
              <div className="flex items-center justify-center">
                <ul className="flex items-center justify-center mr-4 text-orange-400">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                </ul>
                <span>{user?.rating}</span>
              </div>
            </div>

            {/* basic info */}
            <div className="mt-8 ">
              <div className="flex items-center justify-between text-sm">
                <span>From</span>
                <strong>{user?.location}</strong>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span>Member since</span>
                <strong>{user?.member}</strong>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span>Rate</span>
                <strong>{user?.rate}</strong>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span>Latest Review</span>
                <strong>{user?.lastReview}</strong>
              </div>
            </div>
          </div>

          {/* menu */}
          <div className="absolute top-[20px] right-[20px] cursor-pointer">
            <FaEllipsisH />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserChart;
