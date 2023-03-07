import React from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { featureProfile } from "../../../DummyData";
import SecondaryButton from "../../share/secoondayBtn/SecondaryButton";
import "./FeatureProfile.css";
const placeholderImages = "https://i.ibb.co/cNyNW61/team-placeholder.png";

const FeatureProfile = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <FaLongArrowAltRight className="text-sm" />,
    prevArrow: <FaLongArrowAltLeft className="text-sm" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 459,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-center mt-36 px-2 feature-profile-wrap">
      <div className="text-start flex items-center justify-between">
        <h2 className="font-semibold">Featured profile this week</h2>
        <Link>
          <span>view more</span>
        </Link>
      </div>

      {/*  */}

      <Slider {...settings}>
        {/* user image and article */}

        {featureProfile.map((data) => (
          <div className="feature-wrapper mb-7">
            <div className="mt-12 max-w-[80%]">
              <div className="flex items-center justify-between">
                <div className="relative">
                  <img
                    src={data?.image ? data?.image : placeholderImages}
                    alt="feature-profile"
                    className="max-w-[86px]"
                  />

                  <div className="feature-active w-4 h-4 rounded-full bg-[#30C736] absolute bottom-0 right-[10px] border border-spacing-4"></div>
                </div>
                <div className="text-start">
                  <h4>{data?.username}</h4>
                  <p>{data?.prof}</p>
                </div>
              </div>

              {/* last content of this feature */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <ul className="flex items-center justify-start text-[#FF8412] feature-rating">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                  <span>{data?.rating}</span>
                  <span>
                    <SecondaryButton>${data?.price}/Hr</SecondaryButton>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeatureProfile;
