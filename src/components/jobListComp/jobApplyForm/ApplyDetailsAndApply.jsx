import React from "react";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import CompanyBrand from "../../share/companyBrand/CompanyBrand";
import PrimaryButton from "../../share/PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../../share/primaryWhiteBtn/PrimaryWhiteBtn";
import TopBanner from "../../share/topBanner/TopBanner";
// import "./JobDetails.css";
import "./ApplyDetailsAndApply.css";

const ApplyDetailsAndApply = ({ data }) => {
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
      <TopBanner>Apply Details</TopBanner>

      {/* job and company details  */}
      <div className="lg:flex gap-6 max-w-[90%] mx-auto  job-and-company-details-wrap">
        {/* left sidebar */}
        <div className="left-sidebar w-full lg:max-w-[30%] mx-auto  p-7 rounded-3xl bg-white shadow-xl">
          <div className="company-brand ">
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
              <div className="flex items-center justify-center  mt-4 lg:mt-0">
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
            <div className="flex items-center justify-between  mt-7">
              <PrimaryWhiteBtn>23 Vacancy</PrimaryWhiteBtn>

              <PrimaryWhiteBtn>More Detail</PrimaryWhiteBtn>
            </div>
          </div>
        </div>

        {/* right main content details */}
        <div className="right-content-details w-full lg:max-w-[70%] mx-auto bg-white rounded-3xl p-7 shadow-xl">
          {/* company heading information */}

          {/* company salary area */}
          <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center mt-12 w-full">
            {/* salary */}
            <div className="flex items-center justify-center ">
              <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                <img src="../images/BagSalary.png" alt="" />
              </span>
              <div>
                <h4 className="font-bold text-md ">{price}</h4>
                <p className="font-thin text-[12px] -mt-1">Salary</p>
              </div>
            </div>

            {/* experience */}
            <div className="flex items-center justify-center mt-4 sm:mt-0">
              <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                <img src="../images/exp.png" alt="" />
              </span>
              <div>
                <h4 className="font-bold text-md ">{experience} Years</h4>
                <p className="font-thin text-[12px] -mt-1">Experience</p>
              </div>
            </div>

            {/* location */}
            <div className="flex items-center justify-center mt-4 sm:mt-0">
              <span className="w-[40px] h-[40px] rounded-full bg-[#8240D6] flex items-center justify-center mr-2 text-white">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="font-bold text-md ">{locationArea}</h4>
                <p className="font-thin text-[12px] -mt-1">{location}</p>
              </div>
            </div>
          </div>

          {/* apply form */}
          <div className="job-apply-form mt-12">
            <h3>Fill the job applications</h3>
            <form>
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7 mt-7">
                {/* first name */}
                <div className="">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    id="firstName"
                    required
                  />
                </div>

                {/* middle name */}
                <div>
                  <label htmlFor="middleName">Middle name</label>
                  <input
                    type="text"
                    placeholder="Middle name"
                    id="middleName"
                    required
                  />
                </div>

                {/* last name */}
                <div>
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    id="lastName"
                    required
                  />
                </div>

                {/* date */}
                <div>
                  <label htmlFor="date">Birth Date</label>
                  <input
                    type="date"
                    placeholder="First name"
                    id="date"
                    required
                  />
                </div>

                {/* first name */}
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Email" id="email" required />
                </div>

                {/* first name */}
                <div>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="number"
                    placeholder="Number"
                    id="phone"
                    required
                  />
                </div>
              </div>

              {/* about me */}
              <div className="mt-7">
                <label htmlFor="message">About me</label>
                <textarea
                  name=""
                  id="message"
                  placeholder="Type your message..."
                  required
                  className="max-w-full w-full border border-gray-300 px-2 py-2 h-32"
                ></textarea>
              </div>

              {/* your images */}
              <div>
                <label htmlFor="message">Attach your resume</label>
                <input type="file" name="" id="" />
              </div>

              {/* submit button */}
              <div className="flex justify-between items-center px-2">
                <div type="submit" className="mt-7">
                  <PrimaryButton>Submit</PrimaryButton>
                </div>
                <div>
                  <PrimaryWhiteBtn>Cancel</PrimaryWhiteBtn>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* company brand */}
      <div className="md:max-w-[90%] mx-auto px-2 mt-12">
        <CompanyBrand />
      </div>
    </div>
  );
};

export default ApplyDetailsAndApply;
