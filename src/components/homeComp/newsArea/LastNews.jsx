import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";
import SecondaryButton from "../../share/secoondayBtn/SecondaryButton";
import "./LastNews.css";

const LastNews = () => {
  const [currentSlide, setCurrentSlide] = useState("");
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <FaLongArrowAltRight className="text-sm" />,
    prevArrow: <FaLongArrowAltLeft className="text-sm" />,
    afterChange: (currentValue) => setCurrentSlide(currentValue),
  };

  console.log(currentSlide);

  let slideStyle;

  if (currentSlide === 0) {
    slideStyle = "bg-purple-600 w-20";
  } else if (currentSlide === 1) {
    slideStyle = "bg-purple-600 w-20";
  } else if (currentSlide === 2) {
    slideStyle = "bg-purple-600 w-20";
  }

  return (
    <section className="mt-40 px-2 max-w-full">
      {/* section title */}
      <div className="md:max-w-[35%] px-2 mr-auto text-start">
        <h2 className="text-2xl font-semibold">Latest News</h2>
        <p className="text-[14px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* slide dots */}
      <dir className="flex justify-end items-center max-w-full">
        <div className="slide-dots flex items-center justify-between w-[150px]">
          <span
            className={`w-5 h-1 block bg-[#D1D1D1]  ${
              currentSlide === 0 ? slideStyle : undefined
            }`}
          ></span>
          <span
            className={`w-5 h-1 block bg-[#D1D1D1] ${
              currentSlide === 1 ? slideStyle : undefined
            }`}
          ></span>
          <span
            className={`w-5 h-1 block bg-[#D1D1D1] ${
              currentSlide === 2 ? slideStyle : undefined
            }`}
          ></span>
        </div>
      </dir>

      <Slider {...settings}>
        <div className="news-wrapper">
          {/* slide items 01 */}
          <div className="md:max-w-full mt-20 flex gap-6 flex-col md:flex-row">
            <div className="md:max-w-[30%] mx-auto">
              <div className="max-w-full h-full news-first-part rounded-xl relative">
                <img
                  src="../images/news/newsbg1.png"
                  alt=""
                  className="max-w-full h-full"
                />
                {/* article */}
                <div className="absolute top-0 right-0 m-4">
                  <SecondaryButton>PEOPLES</SecondaryButton>
                </div>
                <div className="absolute right-0 text-white px-2 news-article">
                  {/* admin and time */}
                  <div>
                    <span className="text-xl font-normal">James</span>
                    <span className="text-xl font-normal ml-4">24min read</span>
                  </div>
                  <div className="mb-7 mt-2">
                    <h2 className="text-2xl font-semibold">
                      A Media Critic Focuses on the Crisis in Local News
                    </h2>
                  </div>
                  <div className="news-article-text py-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui consequuntur quisquam, ipsum voluptatum quidem ipsa
                      natus dolorum quod nesciunt nostrum, quaerat ea earum
                      assumenda pariatur ad quo, officiis cum. A!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:max-w-[70%] mx-auto h-full">
              <div className="max-w-full h-full news-first-part rounded-xl relative">
                <img
                  src="../images/news/newsbg2.png"
                  alt=""
                  className="max-w-full h-full"
                />
                {/* article */}
                <div className="absolute top-0 right-0 m-4">
                  <SecondaryButton>TECHNOLOGY</SecondaryButton>
                </div>
                <div className="absolute right-0 text-white px-2 news-article">
                  {/* admin and time */}
                  <div>
                    <span className="text-xl font-normal">James</span>
                    <span className="text-xl font-normal ml-4">24min read</span>
                  </div>
                  <div className="mb-7 mt-2">
                    <h2 className="text-2xl font-semibold">
                      Let’s increase your skills in pandemic with Ziro Workshops
                      2020
                    </h2>
                  </div>
                  <div className="news-article-text py-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui consequuntur quisquam, ipsum voluptatum quidem ipsa
                      natus dolorum quod nesciunt nostrum, quaerat ea earum
                      assumenda pariatur ad quo. quisquam, ipsum voluptatum
                      quidem ipsa natus dolorum quod nesciunt nostrum, quaerat
                      ea earum assumenda pariatur ad quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide items 02 */}
        <div>
          <div className="md:max-w-full mt-20 flex gap-6 flex-col md:flex-row">
            <div className="md:max-w-[30%] mx-auto">
              <div className="max-w-full h-full news-first-part rounded-xl relative">
                <img
                  src="../images/news/newsbg1.png"
                  alt=""
                  className="max-w-full h-full"
                />
                {/* article */}
                <div className="absolute top-0 right-0 m-4">
                  <SecondaryButton>PEOPLES</SecondaryButton>
                </div>
                <div className="absolute right-0 text-white px-2 news-article">
                  {/* admin and time */}
                  <div>
                    <span className="text-xl font-normal">James</span>
                    <span className="text-xl font-normal ml-4">24min read</span>
                  </div>
                  <div className="mb-7 mt-2">
                    <h2 className="text-2xl font-semibold">
                      A Media Critic Focuses on the Crisis in Local News
                    </h2>
                  </div>
                  <div className="news-article-text py-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui consequuntur quisquam, ipsum voluptatum quidem ipsa
                      natus dolorum quod nesciunt nostrum, quaerat ea earum
                      assumenda pariatur ad quo, officiis cum. A!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:max-w-[70%] mx-auto h-full">
              <div className="max-w-full h-full news-first-part rounded-xl relative">
                <img
                  src="../images/news/newsbg2.png"
                  alt=""
                  className="max-w-full w-[803px] max-h-[425px] object-cover"
                />
                {/* article */}
                <div className="absolute top-0 right-0 m-4">
                  <SecondaryButton>TECHNOLOGY</SecondaryButton>
                </div>
                <div className="absolute right-0 text-white px-2 news-article">
                  {/* admin and time */}
                  <div>
                    <span className="text-xl font-normal">James</span>
                    <span className="text-xl font-normal ml-4">24min read</span>
                  </div>
                  <div className="mb-7 mt-2">
                    <h2 className="text-2xl font-semibold">
                      Let’s increase your skills in pandemic with Ziro Workshops
                      2020
                    </h2>
                  </div>
                  <div className="news-article-text py-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui consequuntur quisquam, ipsum voluptatum quidem ipsa
                      natus dolorum quod nesciunt nostrum, quaerat ea earum
                      assumenda pariatur ad quo. quisquam, ipsum voluptatum
                      quidem ipsa natus dolorum quod nesciunt nostrum, quaerat
                      ea earum assumenda pariatur ad quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slide items 03 */}
        <div>
          <div className="md:max-w-full mt-20 flex gap-6 flex-col md:flex-row">
            <div className="md:max-w-[30%] mx-auto">
              <div className="max-w-full h-full news-first-part rounded-xl relative">
                <img
                  src="../images/news/newsbg1.png"
                  alt=""
                  className="max-w-full w-[803px] max-h-[425px] object-cover"
                />
                {/* article */}
                <div className="absolute top-0 right-0 m-4">
                  <SecondaryButton>PEOPLES</SecondaryButton>
                </div>
                <div className="absolute right-0 text-white px-2 news-article">
                  {/* admin and time */}
                  <div>
                    <span className="text-xl font-normal">James</span>
                    <span className="text-xl font-normal ml-4">24min read</span>
                  </div>
                  <div className="mb-7 mt-2">
                    <h2 className="text-2xl font-semibold">
                      A Media Critic Focuses on the Crisis in Local News
                    </h2>
                  </div>
                  <div className="news-article-text py-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui consequuntur quisquam, ipsum voluptatum quidem ipsa
                      natus dolorum quod nesciunt nostrum, quaerat ea earum
                      assumenda pariatur ad quo, officiis cum. A!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:max-w-[70%] mx-auto h-full">
              <div className="max-w-full h-full news-first-part rounded-xl relative">
                <img
                  src="https://i.ibb.co/2Zn3F0N/laurent-cassagne-5w-Wg-GR2a-Qpg-unsplash.jpg"
                  alt=""
                  className="max-w-full w-[803px] max-h-[425px] object-cover"
                />
                {/* article */}
                <div className="absolute top-0 right-0 m-4">
                  <SecondaryButton>TECHNOLOGY</SecondaryButton>
                </div>
                <div className="absolute right-0 text-white px-2 news-article">
                  {/* admin and time */}
                  <div>
                    <span className="text-xl font-normal">James</span>
                    <span className="text-xl font-normal ml-4">24min read</span>
                  </div>
                  <div className="mb-7 mt-2">
                    <h2 className="text-2xl font-semibold">
                      Let’s increase your skills in pandemic with Ziro Workshops
                      2020
                    </h2>
                  </div>
                  <div className="news-article-text py-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui consequuntur quisquam, ipsum voluptatum quidem ipsa
                      natus dolorum quod nesciunt nostrum, quaerat ea earum
                      assumenda pariatur ad quo. quisquam, ipsum voluptatum
                      quidem ipsa natus dolorum quod nesciunt nostrum, quaerat
                      ea earum assumenda pariatur ad quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* news content */}
    </section>
  );
};

export default LastNews;
