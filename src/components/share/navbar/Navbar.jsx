import React, { useEffect, useState } from "react";
import { FaList, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimaryWhiteBtn from "../primaryWhiteBtn/PrimaryWhiteBtn";
import "./Navbar.css";
const logo = "https://i.ibb.co/5BBn0Xr/ziro.png";

const Navbar = () => {
  const [navSticky, setNavSticky] = useState(false);
  const [navScroll, setNavScroll] = useState("");
  const [navScrollOver, setNavScrollOver] = useState("");

  // navigation collapse function
  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);
    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  // navbar scrolling effect
  const handleNavbarScroll = () => {
    if (window.scrollY > 500) {
      setNavScroll("navScrollOver");
    } else {
      setNavScroll("");
    }
  };

  // navigation scrolling function top
  useEffect(() => {
    window.addEventListener("scroll", handleNavbarScrollOver);
    return () => {
      window.removeEventListener("scroll", handleNavbarScrollOver);
    };
  }, []);

  // navbar scrolling over function class add
  const handleNavbarScrollOver = () => {
    if (window.scrollY > 0) {
      setNavScrollOver("navScroll");
    } else {
      setNavScrollOver("");
    }
  };

  // navbar click collapse
  function handleNavbarCollapse() {
    setNavSticky(!navSticky);
  }

  function handleNavbarOverly() {
    setNavSticky(!navSticky);
  }

  function handleNavbarClose() {
    setNavSticky(!navSticky);
  }

  const navItems = (
    <>
      <li className="nav-items">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-items">
        <Link to="/pricing" className="nav-link">
          Pricing
        </Link>
      </li>

      <li className="nav-items">
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
      </li>

      <li className="nav-items">
        <Link to="/member" className="nav-link">
          Became a member
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navigation py-3 px-2 transition-all ${navScroll} ${navScrollOver}`}
    >
      {/* Navigation bar */}
      {/* navbar wrapper */}
      <div className="navbar-wrapper max-w-[90%] mx-auto">
        <div className="navbar-box flex items-center justify-between">
          {/* logo area */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" className="max-w-full" />
          </Link>

          {/* navbar collapse icon */}
          <div
            className="lg:hidden block"
            onClick={() => handleNavbarCollapse()}
          >
            <button>
              <FaList />
            </button>
          </div>

          {/* navbar*/}
          <div className="lg:block hidden ">
            <div className="flex items-center justify-between">
              <ul className="navbar-nav flex items-center justify-between">
                {navItems}
              </ul>

              {/* login area */}
              <div className="login-area flex items-center justify-between gap-4">
                {/* search box */}
                <div className="navbar-search relative flex items-center justify-center">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search here..."
                  />
                  <FaSearch className="navbar-search-icon" />
                </div>

                {/* login */}
                <div>
                  <Link to="/">
                    <PrimaryWhiteBtn>log in</PrimaryWhiteBtn>
                  </Link>
                </div>

                {/* sign up */}
                <div>
                  <Link to="/">
                    <PrimaryButton>Sign up</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ============navbar collapse============*/}
          {/* navbar*/}
          <div
            className={`lg:hidden block collapse-navbar ${
              navSticky ? "navSticky" : ""
            }`}
          >
            {/* close icon */}
            <span
              className="navbar-close absolute top-0 right-0  m-2 text-white cursor-pointer"
              onClick={handleNavbarClose}
            >
              <FaTimes />
            </span>

            <div className="mt-7 relative">
              {/* logo area */}
              <Link to="/" className="navbar-logo">
                <img src={logo} alt="logo" className="max-w-full" />
              </Link>

              <ul className="navbar-nav">{navItems}</ul>

              {/* login area */}
              <div className="login-area my-3">
                {/* search box */}
                <div className="navbar-search relative flex items-center justify-center my-3">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search here..."
                  />
                  <FaSearch className="navbar-search-icon" />
                </div>

                <div className="flex items-center justify-between">
                  {/* login */}
                  <div>
                    <Link to="/">
                      <PrimaryWhiteBtn>log in</PrimaryWhiteBtn>
                    </Link>
                  </div>

                  {/* sign up */}
                  <div>
                    <Link to="/">
                      <PrimaryButton>Sign up</PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navigation overly */}
      <div
        className={`${navSticky ? "navigation-overly" : ""}`}
        onClick={handleNavbarOverly}
      ></div>
    </div>
  );
};

export default Navbar;
