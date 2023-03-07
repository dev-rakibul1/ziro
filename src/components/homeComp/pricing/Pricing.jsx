import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../../share/PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../../share/primaryWhiteBtn/PrimaryWhiteBtn";

const Pricing = () => {
  return (
    <section className="mt-52">
      {/* pricing title */}
      <div className="md:max-w-[35%] px-2 mx-auto text-center">
        <h2 className="text-2xl font-semibold">Pricing Plan</h2>
        <p className="text-[14px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* pricing content */}
      <div className="pricing-content mt-20 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
        {/* pricing content */}
        <div className="shadow-lg p-4">
          <div className="text-center">
            <h5 className="text-xl font-semibold">Free</h5>
            <h2 className="text-[45px] font-semibold">$0</h2>
            <h6 className="font-normal text-md -mt-2">per month</h6>
          </div>
          {/* pricing content body */}
          <div className="flex items-start justify-start mt-7">
            <ul className="max-w-full mx-auto">
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> Lorem ipsum
                dolor sit ame
              </li>
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> Consectetur
                adipiscing elit, sed Do
              </li>
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> eiusmod tempor
                incididunt{" "}
              </li>
            </ul>
          </div>

          <div className="text-center mt-[40px]">
            <PrimaryWhiteBtn className="font-semibold text-[#5B48D2]">
              Learn more
            </PrimaryWhiteBtn>
          </div>
        </div>

        {/* pricing content */}
        <div className="shadow-lg p-4">
          <div className="text-center">
            <h5 className="text-xl font-semibold">REGULAR</h5>
            <h2 className="text-[45px] font-semibold">$175</h2>
            <h6 className="font-normal text-md -mt-2">per month</h6>
          </div>
          {/* pricing content body */}
          <div className="flex items-start justify-start mt-7">
            <ul className="max-w-full mx-auto">
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> Lorem ipsum
                dolor sit ame
              </li>
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> Consectetur
                adipiscing elit, sed Do
              </li>
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> eiusmod tempor
                incididunt{" "}
              </li>
            </ul>
          </div>

          <div className="text-center mt-[40px]">
            <PrimaryButton className="font-semibold text-[#5B48D2]">
              Learn more
            </PrimaryButton>
          </div>
        </div>

        {/* pricing content */}
        <div className="shadow-lg p-4">
          <div className="text-center">
            <h5 className="text-xl font-semibold">PREMIUM</h5>
            <h2 className="text-[45px] font-semibold">$500</h2>
            <h6 className="font-normal text-md -mt-2">per month</h6>
          </div>
          {/* pricing content body */}
          <div className="flex items-start justify-start mt-7">
            <ul className="max-w-full mx-auto">
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> Lorem ipsum
                dolor sit ame
              </li>
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> Consectetur
                adipiscing elit, sed Do
              </li>
              <li className="flex items-center justify-start mt-3">
                <FaCheckCircle className="mr-2 text-[#5B48D2]" /> eiusmod tempor
                incididunt{" "}
              </li>
            </ul>
          </div>

          <div className="text-center mt-[40px]">
            <PrimaryWhiteBtn className="font-semibold text-[#5B48D2]">
              Learn more
            </PrimaryWhiteBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
