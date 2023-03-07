import { createBrowserRouter } from "react-router-dom";
import JobApplyForm from "../components/jobListComp/jobApplyForm/JobApplyForm";
import JobDetails from "../components/jobListComp/jobDetails/JobDetails";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import JobList from "../pages/jobList/JobList";
import Member from "../pages/member/Member";
import Pricing from "../pages/pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/blog", element: <Blog /> },
      { path: "/member", element: <Member /> },
      {
        path: "/job-apply/:id",
        loader: async () => fetch(`recentJobDetails.json`),
        element: <JobApplyForm />,
      },
      {
        path: "/jobList",
        element: <JobList />,
        loader: async () => fetch(`recentJobDetails.json`),
      },
      {
        path: "/jobDetails/:id",
        loader: async () => fetch(`recentJobDetails.json`),
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
