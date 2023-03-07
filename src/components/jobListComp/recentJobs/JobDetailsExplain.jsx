import React from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./RecentJobs.css";

const JobDetailsExplain = ({ job }) => {
  // const myData = useLoaderData();
  // console.log("first", myData);

  const {
    tittleImg,
    title,
    team,
    price,
    salaryClass,
    locationArea,
    location,
    apply,
    _id,
  } = job;
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-4 justify-center sm:justify-start border border-gray-200 rounded-xl shadow-lg p-4">
      {/* box items */}
      <div className="box-items flex justify-start items-center">
        {/* box box images */}
        <div className="max-w-[60px]">
          <img src={tittleImg} className="max-w-full" alt="recent jobs" />
        </div>

        {/* title area */}
        <div className="ml-2">
          <h4 className="font-bold text-sm">{title}</h4>
          <p className="text-[14px] font-normal">{team}</p>
        </div>
      </div>

      {/* box items/ price*/}
      <div className="box-items  flex justify-start items-center">
        {/* box box images */}
        <div className="max-w-[48px]">
          <img
            src="../images/BagSalary.png"
            className="max-w-full"
            alt="recent jobs"
          />
        </div>

        {/* title area */}
        <div className="ml-2">
          <h4 className="font-semibold text-sm">{price}</h4>
          <p className="text-[12px] font-normal">{salaryClass}</p>
        </div>
      </div>

      {/* box items */}
      <div className="box-items  flex justify-start items-center">
        {/* box box images */}
        <div className=" w-12 h-12 rounded-full bg-[#F19F53] text-white flex items-center justify-center">
          <FaMapMarkerAlt className="text-3xl" />
        </div>

        {/* title area */}
        <div className="ml-2">
          <h4 className="font-semibold text-sm">{locationArea}</h4>
          <p className="text-[12px] font-normal">{location}</p>
        </div>
      </div>

      {/* box items */}
      <div className="box-items  flex justify-center items-center">
        <Link to={`/jobDetails/${_id}`}>
          <button className="recent-job-icons mr-5">{apply}</button>
        </Link>
        <button className="recent-job-heart-icons ">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default JobDetailsExplain;
