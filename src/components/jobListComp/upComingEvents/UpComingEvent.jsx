import React from "react";
import { FaHeart } from "react-icons/fa";
import "./UpComingEvent.css";

const UpComingEvent = () => {
  return (
    <section className="mt-20 mb-14">
      {/* up coming filter */}
      <div className="flex items-center justify-between">
        <div>
          <span className="font-semibold">Upcoming Events</span>
        </div>
        <div className="flex items-center justify-start">
          <div className="mr-4">
            <input type="date" />
          </div>
          <div>
            <select
              name=""
              id=""
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              <option value="">Newest</option>
              <option value="">24 hour ago</option>
              <option value="">1 weak ago</option>
              <option value="">1 month ago</option>
            </select>
          </div>
        </div>
      </div>

      {/* up coming events content */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7 mt-7">
        {/* event items 01 */}
        <div className="up-coming-events-article-wrap">
          <img src="../images/events/event1.png" alt="event" />

          <article>
            {/* event time */}
            <div className="event-time-area flex items-center justify-start relative">
              <div className="bg-[#343645] event-like-effect mx-4 event-time">
                <div className="flex items-center justify-center flex-col">
                  <p className="font-bold text-xl">20</p>
                  <p className="text-xs text-[#888A93]">Nov</p>
                </div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mt-4 bg-[#494B58] cursor-pointer event-time-icon">
                  <FaHeart />
                </div>
              </div>
              <div>
                <h3 className="text-[#F4874A] uppercase text-xs">MOBILE APP</h3>
                <h4 className="font-semibold text-md">
                  Global Android Programmer Meetup 2020{" "}
                </h4>
              </div>
            </div>
            <p className="px-4 mt-4 text-[14px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </div>

        {/* event items 02 */}
        <div className="up-coming-events-article-wrap">
          <img src="../images/events/event2.png" alt="event" />

          <article>
            {/* event time */}
            <div className="event-time-area flex items-center justify-start relative">
              <div className="bg-[#343645] event-like-effect mx-4 event-time">
                <div className="flex items-center justify-center flex-col">
                  <p className="font-bold text-xl">02</p>
                  <p className="text-xs text-[#888A93]">Oct</p>
                </div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mt-4 bg-[#494B58] cursor-pointer event-time-icon">
                  <FaHeart />
                </div>
              </div>
              <div>
                <h3 className="text-[#F4874A] uppercase text-xs">
                  ART EXIBITHION
                </h3>
                <h4 className="font-semibold text-md">
                  Paris Designer Meetup with Ziro Partner{" "}
                </h4>
              </div>
            </div>
            <p className="px-4 mt-4 text-[14px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </div>

        {/* event items 03 */}
        <div className="up-coming-events-article-wrap">
          <img src="../images/events/event3.png" alt="event" />

          <article>
            {/* event time */}
            <div className="event-time-area flex items-center justify-start relative">
              <div className="bg-[#343645] event-like-effect mx-4 event-time">
                <div className="flex items-center justify-center flex-col">
                  <p className="font-bold text-xl">07</p>
                  <p className="text-xs text-[#888A93]">Feb</p>
                </div>
                <div className="w-10 h-10 rounded-full border flex items-center justify-center mt-4 bg-[#494B58] cursor-pointer event-time-icon">
                  <FaHeart />
                </div>
              </div>
              <div>
                <h3 className="text-[#F4874A] uppercase text-xs">ACCOUNTING</h3>
                <h4 className="font-semibold text-md">
                  Bussiness Plan in Pandemic with Famous Native Speaker{" "}
                </h4>
              </div>
            </div>
            <p className="px-4 mt-4 text-[14px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default UpComingEvent;
