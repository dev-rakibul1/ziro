import React, { useContext } from "react";
import { FaEllipsisH, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { JOB_DATA_CONTEXT } from "../../../context/JobDataProvider";
import { featuredJobs } from "../../../DummyData";
import CompanyBrand from "../../share/companyBrand/CompanyBrand";
import PrimaryButton from "../../share/PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../../share/primaryWhiteBtn/PrimaryWhiteBtn";
import JobAndCompanyDetails from "./JobAndCompanyDetails";

const JobDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { jobData } = useContext(JOB_DATA_CONTEXT);

  const actualData = jobData?.filter((aData) => aData._id === id);
  console.log(actualData);
  return (
    <div className="max-w-[90%] mx-auto">
      {actualData?.map((data) => (
        <JobAndCompanyDetails data={data} key={data?._id} />
      ))}

      {/* <FeaturedJobs /> */}
      {/* feature jobs */}
      <div className="flex justify-between items-center mt-40 px-2">
        <h3 className="font-semibold text-xl">Related jobs</h3>
        {/* feature more button */}
        <div className="mt-12 text-center">
          <Link to="/jobList">
            <PrimaryButton>View more</PrimaryButton>
          </Link>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 mt-7 mb-20">
        {featuredJobs?.map((data) => (
          <div className="flex text-center flex-col justify-center items-center relative">
            <div className="max-w-[113px]">
              <img
                src={data.image}
                className="max-w-full"
                alt="featured jobs"
              />
            </div>

            {/* article */}
            <article className="">
              <h4 className="font-semibold my-[10px]">{data?.programmer}</h4>
              <p className="text-[#5F4BDB] font-normal mt-2">{data?.title}</p>
              {/* price */}
              <div className="flex justify-between items-center max-w-md mt-2">
                <img
                  src="../images/dollarBag.png"
                  className="w-[17px] mr-2"
                  alt=""
                />
                <span>{data?.price}</span>{" "}
                <span className="text-xs font-normal ml-2">/monthly</span>
              </div>

              {/* price */}
              <div className="flex justify-between items-center max-w-md mt-2">
                <span className="text-[#A9A9A9]">
                  <FaMapMarkerAlt className="mr-2" />
                </span>{" "}
                <span>{data?.location}</span>{" "}
                <span className="text-xs font-normal ml-2">View Maps</span>
              </div>

              {/* heart reaction */}
              <div className="flex justify-between items-center max-w-md mt-7">
                <div>
                  <span className="w-8 h-8 rounded-full border flex items-center justify-center bg-[#FF5353] text-white cursor-pointer">
                    <FaHeart />
                  </span>
                </div>
                <div>
                  <PrimaryWhiteBtn>Apply now</PrimaryWhiteBtn>
                </div>
              </div>
            </article>
            <span className="absolute top-0 right-0 cursor-pointer">
              <FaEllipsisH />
            </span>
          </div>
        ))}
      </div>

      <CompanyBrand />
    </div>
  );
};

export default JobDetails;
