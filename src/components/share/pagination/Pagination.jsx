import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div>
      {/* pagination */}
      <div className="text-[#5B48D2] mt-12 md:max-w-[60%] mx-auto flex items-center justify-evenly py-2 px-4">
        <span className=" flex items-center justify-center cursor-pointer">
          <FaAngleDoubleLeft className="mr-4" /> <span>Previous</span>
        </span>
        <div className=" my-2 rounded-full px-4 border border-[#5b48d2] flex flex-row">
          <span className="w-9 h-9 rounded-full mx-1 cursor-pointer hover:bg-[#5B48D2] hover:text-white transition-all  border border-[#5b48d2] flex items-center justify-center">
            1
          </span>
          <span className="w-9 h-9 rounded-full mx-1 cursor-pointer hover:bg-[#5B48D2] hover:text-white transition-all  border border-[#5b48d2] flex items-center justify-center">
            2
          </span>
          <span className="w-9 h-9 rounded-full mx-1 cursor-pointer hover:bg-[#5B48D2] hover:text-white transition-all  border border-[#5b48d2] flex items-center justify-center">
            3
          </span>
          <span className="w-9 h-9 rounded-full mx-1 cursor-pointer hover:bg-[#5B48D2] hover:text-white transition-all  border border-[#5b48d2] flex items-center justify-center">
            4
          </span>
        </div>
        <span className=" flex items-center justify-center cursor-pointer">
          <span className="mr-4">Next</span> <FaAngleDoubleRight />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
