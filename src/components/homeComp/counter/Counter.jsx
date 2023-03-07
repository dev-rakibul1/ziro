import React from "react";
import CountUp from "react-countup";
const counterBg = "https://i.ibb.co/r0BBFbz/counter.png";

const Counter = () => {
  return (
    <div
      className="mt-40 bg-center bg-cover py-10 md:max-w-[90%] mx-auto px-2 rounded-xl"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="counter grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 items-center justify-center sm:justify-between">
        {/* items 01 */}
        <div className="counter-items text-white text-center py-7">
          <h2 className="text-4xl font-normal ">
            <CountUp end={36789} duration={30} enableScrollSpy>
              36,789+
            </CountUp>
          </h2>
          <p className="font-normal text-[14px] mt-5">Talented Freelancer</p>
        </div>

        {/* items 02 */}
        <div className="counter-items text-white text-center py-7">
          <h2 className="text-4xl font-normal ">
            <CountUp end={458973} duration={30} enableScrollSpy>
              458,973+
            </CountUp>
          </h2>
          <p className="font-normal text-[14px] mt-5">VIsitors</p>
        </div>

        {/* items 03 */}
        <div className="counter-items text-white text-center py-7">
          <h2 className="text-4xl font-normal ">
            <CountUp end={56461} duration={30} enableScrollSpy>
              56,461
            </CountUp>
          </h2>
          <p className="font-normal text-[14px] mt-5">Contract Made</p>
        </div>

        {/* items 04 */}
        <div className="counter-items text-white text-center py-7">
          <h2 className="text-4xl font-normal ">
            <CountUp end={852} duration={50}>
              852K
            </CountUp>
          </h2>
          <p className="font-normal text-[14px] mt-5">Companies</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
