import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black py-12 mt-24 text-[#6E6E77]">
      <div className="footer-section mx-auto max-w-[90%] px-2">
        {/* footer top area */}
        <div className="footer-top-area md:flex gap-6 justify-between items-center">
          <div className=" grow md:max-w-[60%]">
            <h1 className="text-2xl font-semibold">
              Don’t miss our weekly updates about freelancer career
            </h1>
          </div>
          {/* subscribe */}
          <div className=" grow max-w-full flex items-center justify-between relative">
            <input type="text" placeholder="Enter your email address" />
            <button className="subscribe" type="search">
              Subscribe
            </button>
          </div>
        </div>

        {/* footer middle or content area */}
        <div className="footer-content-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 mt-20 text-center sm:text-left">
          {/* box 01 */}
          <div className="">
            <img src="../images/logo2.png" alt="" className="logo-2 mb-7" />
            <p className="text-[14px] font-normal">
              Ziro is a Freelance Landing Website lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
            {/* social icons */}
            <ul className="footer-social flex items-center justify-between my-4">
              <li className="mt-2 hover:bg-[#3AAED2] hover:text-white transition-all duration-300 text-[#6E6E77] w-10 h-10 flex items-center justify-center rounded-full">
                <Link to="/">
                  <FaFacebook />
                </Link>
              </li>
              <li className="mt-2 hover:bg-[#3AAED2] hover:text-white transition-all duration-300 text-[#6E6E77] w-10 h-10 flex items-center justify-center rounded-full">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </li>
              <li className="mt-2 hover:bg-[#3AAED2] hover:text-white transition-all duration-300 text-[#6E6E77] w-10 h-10 flex items-center justify-center rounded-full">
                <Link to="/">
                  <FaYoutube />
                </Link>
              </li>
              <li className="mt-2 hover:bg-[#3AAED2] hover:text-white transition-all duration-300 text-[#6E6E77] w-10 h-10 flex items-center justify-center rounded-full">
                <Link to="/">
                  <FaLinkedin />
                </Link>
              </li>
              <li className="mt-2 hover:bg-[#3AAED2] hover:text-white transition-all duration-300 text-[#6E6E77] w-10 h-10 flex items-center justify-center rounded-full">
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>

          {/* box 02 */}
          <div>
            <div>
              <h4 className="text-[17px] font-semibold">Ziro</h4>
              <ul className="mt-7">
                <li className="mt-2">
                  <Link to="/">Why Ziro</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Enterprise</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Customer Story</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Security</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* box 03 */}
          <div>
            <div>
              <h4 className="text-[17px] font-semibold">Resources</h4>
              <ul className="mt-7">
                <li className="mt-2">
                  <Link to="/">Why Ziro</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Enterprise</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Customer Story</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Security</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* box 04 */}
          <div>
            <div>
              <h4 className="text-[17px] font-semibold">Company</h4>
              <ul className="mt-7">
                <li className="mt-2">
                  <Link to="/">Why Ziro</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Enterprise</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Customer Story</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Security</Link>
                </li>
                <li className="mt-2">
                  <Link to="/">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* box 05 */}
          <div>
            <div>
              <h4 className="text-[17px] font-semibold">
                Get in Touch with Us
              </h4>
              <ul className="mt-7">
                <li className="mt-2">
                  <span className=" flex items-start justify-start">
                    <FaMapMarkerAlt className="text-2xl mr-2" />
                    832 Thompson Drive, San Fransisco CA 94107, United States
                  </span>
                </li>
                <li className=" flex items-center justify-start mt-3">
                  <FaPhoneAlt className="text-md mr-2" /> +123 345123 556
                </li>

                <li className=" flex items-center justify-start mt-3">
                  <FaEnvelope className="text-md mr-2" /> info@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom or copyright area */}
      <div className="border-t-2 border-gray-800 mt-12">
        <div className="footer-copyright-area md:flex items-center justify-between max-w-[90%] mx-auto px-2 mt-5">
          <p>Ziro Freelancer Landing Website - © 2020 All Rights Reserved</p>
          <p className="mt-4 sm:mt-0">Made with ♥ by Peterdraw</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
