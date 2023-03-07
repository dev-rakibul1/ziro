import React from "react";
import { FaHeart, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimaryButton from "../../share/PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../../share/primaryWhiteBtn/PrimaryWhiteBtn";
import TopBanner from "../../share/topBanner/TopBanner";
import "./JobDetails.css";

const JobAndCompanyDetails = ({ data }) => {
  const {
    tittleImg,
    title,
    info,
    team,
    locationArea,
    location,
    price,
    experience,
    details,
    _id,
  } = data;

  return (
    <div>
      <TopBanner>Job Details</TopBanner>

      {/* job and company details  */}
      <div className="lg:flex gap-6 max-w-[90%] mx-auto  job-and-company-details-wrap">
        {/* left sidebar */}
        <div className="left-sidebar w-full lg:max-w-[30%] mx-auto  p-7 rounded-3xl bg-white shadow-xl">
          <div className="company-brand">
            <div className="flex justify-center items-center flex-col">
              <div>
                <img src={tittleImg} alt="company" />
              </div>
              <h2 className="company-title font-bold mt-7">{team}</h2>
              <p className="agency-name font-normal text-[12px] mb-4">
                {title}
              </p>
              <div className="mt-4">
                <PrimaryButton>+ Follow</PrimaryButton>
              </div>
            </div>

            {/* employ and rating */}
            <div className="employ-rating mt-7 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center w-ful">
              {/* employee */}
              <div className="flex items-center justify-center">
                <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                  <FaUserAlt />
                </span>
                <div>
                  <h4 className="font-bold text-md ">{info?.employ}</h4>
                  <p className="font-thin text-[12px] -mt-1">Employee</p>
                </div>
              </div>

              {/* rating */}
              <div className="flex items-center justify-center mt-4 lg:mt-0">
                <span className="w-[40px] h-[40px] rounded-full bg-[#F5B716] flex items-center justify-center mr-2 text-white">
                  <FaUserAlt />
                </span>
                <div>
                  <h4 className="font-bold text-md ">{info?.rating}</h4>
                  <p className="font-thin text-[12px] -mt-1">Rating</p>
                </div>
              </div>
            </div>

            {/* location */}
            <div>
              <div>
                <div className="flex items-center justify-start mt-7">
                  <span className="w-[40px] h-[40px] rounded-full bg-[#E3E3E3] flex items-center justify-center mr-2 text-white">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <h4 className="font-bold text-md ">{locationArea}</h4>
                    <p className="font-thin text-[12px] -mt-1">{location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* about company */}
            <div className="mt-7">
              <h4 className="font-semibold">About Company</h4>
              <p className="font-normal text-[14px]">{info?.aboutCompany}</p>
            </div>

            {/* more details */}
            <div className="flex items-center justify-between mt-7">
              <PrimaryWhiteBtn>23 Vacancy</PrimaryWhiteBtn>

              <PrimaryWhiteBtn>More Detail</PrimaryWhiteBtn>
            </div>
          </div>
        </div>

        {/* right main content details */}
        <div className="right-content-details w-full lg:max-w-[70%] mx-auto bg-white rounded-3xl p-7 shadow-xl">
          {/* company heading information */}
          <div className="md:flex justify-between items-center my-7">
            {/* heading left */}
            <div>
              <h2 className="font-bold text-2xl">{title}</h2>
              <p className="text-[12px] font-normal">
                Posted by <strong className="capitalize">"{info.admin}"</strong>{" "}
                on {info?.publishData}
              </p>
            </div>

            <div className="flex justify-start items-center  mt-4 lg:mt-0">
              <Link to={`/job-apply/${_id}`}>
                <PrimaryButton>Apply now</PrimaryButton>
              </Link>
              <span className="w-9 h-9 rounded-full  flex justify-center items-center ml-4 cursor-pointer bg-[#F5D0D0] text-[#F55050]">
                <FaHeart />
              </span>
            </div>
          </div>

          {/* company salary area */}
          <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-12 w-ful">
            {/* salary */}
            <div className="flex items-center justify-center">
              <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                <img src="../images/BagSalary.png" alt="" />
              </span>
              <div>
                <h4 className="font-bold text-md ">{price}</h4>
                <p className="font-thin text-[12px] -mt-1">Salary</p>
              </div>
            </div>

            {/* experience */}
            <div className="flex items-center justify-center  mt-4 lg:mt-0">
              <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                <img src="../images/exp.png" alt="" />
              </span>
              <div>
                <h4 className="font-bold text-md ">{experience} Years</h4>
                <p className="font-thin text-[12px] -mt-1">Experience</p>
              </div>
            </div>

            {/* location */}
            <div className="flex items-center justify-center  mt-4 lg:mt-0">
              <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="font-bold text-md ">{locationArea}</h4>
                <p className="font-thin text-[12px] -mt-1">{location}</p>
              </div>
            </div>
          </div>

          {/* job details */}
          <div className="mt-12">
            <h3 className="font-semibold my-2">Job details</h3>
            <p className="font-normal text-[14px]">
              {details.substring(0, 500)}
            </p>

            <p className="font-normal text-[14px] mt-7">
              {details.substring(500)}
            </p>
          </div>

          {/* images gallary */}
          <div className="mt-7">
            <h3 className="font-semibold my-2">Gallery</h3>
            <div
              className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6
            "
            >
              <div>
                <img
                  src="https://i.ibb.co/JBd1NnB/sky.jpg"
                  className="rounded-xl"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/JBd1NnB/sky.jpg"
                  className="rounded-xl"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/JBd1NnB/sky.jpg"
                  className="rounded-xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAndCompanyDetails;
