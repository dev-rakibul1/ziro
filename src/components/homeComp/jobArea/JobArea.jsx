import React from "react";
import { FaPlay } from "react-icons/fa";

const JobArea = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-full">
          <div className="w-full md:max-w-[50%] relative">
            <img
              src="../images/jobrighSide.png"
              className="max-w-full rounded-lg"
              alt=""
            />

            {/* media */}
            <div
              className=" w-8 h-8 flex items-center justify-center rounded-full top-1/2 left-1/2 absolute border bg-white text-xs cursor-pointer"
              style={{ transform: "translateY(-50%)" }}
            >
              <span>
                <FaPlay />
              </span>
            </div>
          </div>
          <div className="w-full md:max-w-[50%]">
            <h6 className="font-thin text-sm">How it works</h6>
            <h1 className="text-[31px] font-semibold ">
              Start find a job you love <br /> with us easily
            </h1>

            <div>
              <ul>
                {/* box 1 */}
                <div className="flex items-center justify-start">
                  <span className="font-bold tex-2xl bg-slate-200 rounded-2xl w-10 h-10 flex items-center justify-center text-[#8E22E2]">
                    1
                  </span>
                  <div tabIndex={0} className="collapse collapse-arrow">
                    <div className="collapse-title font-semibold text-lg">
                      Complete Profile
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* box 1 */}
                <div className="flex items-center justify-start">
                  <span className="font-bold tex-2xl bg-slate-200 rounded-2xl w-10 h-10 flex items-center justify-center text-[#2B3DC7]">
                    2
                  </span>
                  <div tabIndex={0} className="collapse collapse-arrow">
                    <div className="collapse-title font-semibold text-lg">
                      Search Vacancies
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* box 3 */}
                <div className="flex items-center justify-start">
                  <span className="font-bold tex-2xl bg-slate-200 rounded-2xl w-10 h-10 flex items-center justify-center text-[#3DCD65]">
                    3
                  </span>
                  <div tabIndex={0} className="collapse collapse-arrow">
                    <div className="collapse-title font-semibold text-lg">
                      App jobs
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobArea;
