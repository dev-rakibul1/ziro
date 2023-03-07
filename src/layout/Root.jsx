import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/share/footer/Footer";
import Navbar from "../components/share/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
