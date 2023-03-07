import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SecondaryButton from "../secoondayBtn/SecondaryButton";

const Footer = () => {
  return (
    <footer className="bg-black py-12 mt-24 text-white">
      <div className="footer mx-auto max-w-[90%] px-2">
        {/* footer top area */}
        <div className="footer-top-area">
          <h1>Don’t miss our weekly updates about freelancer career</h1>
          {/* subscribe */}
          <div>
            <input type="search" placeholder="Enter your email address" />
            <SecondaryButton className="uppercase">Subscribe</SecondaryButton>
          </div>
        </div>

        {/* footer middle or content area */}
        <div className="footer-content-area">
          {/* box 01 */}
          <div>
            <img src="../images/logo2.png" alt="" className="logo-2" />
            <p>
              Ziro is a Freelance Landing Website lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
            {/* social icons */}
            <ul className="footer-social">
              <li className="mt-2">
                <FaFacebook />
              </li>
              <li className="mt-2">
                <FaTwitter />
              </li>
              <li className="mt-2">
                <FaYoutube />
              </li>
              <li className="mt-2">
                <FaLinkedin />
              </li>
              <li className="mt-2">
                <FaInstagram />
              </li>
            </ul>
          </div>

          {/* box 02 */}
          <div>
            <div>
              <h4 className="text-[17px] font-semibold mb-12">Ziro</h4>
              <ul className="mt-12">
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
              <h4 className="text-[17px] font-semibold">Ziro</h4>
              <ul>
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
              <h4 className="text-[17px] font-semibold">Ziro</h4>
              <ul>
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
        </div>

        {/* box 05 */}
        <div>
          <div>
            <h4 className="text-[17px] font-semibold">Get in Touch with Us</h4>
            <ul>
              <li className="mt-2">
                <span>
                  <FaLocationArrow />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* footer bottom or copyright area */}
        <div className="footer-copyright-area">
          <p>copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
