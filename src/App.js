import React from "react";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import JobDataProvider from "./context/JobDataProvider";
import router from "./router/Router";

const App = () => {
  return (
    <div>
      <JobDataProvider>
        <RouterProvider router={router}></RouterProvider>
      </JobDataProvider>
    </div>
  );
};

export default App;
