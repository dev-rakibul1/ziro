import React from "react";
import { useLoaderData } from "react-router-dom";
import Pagination from "../../share/pagination/Pagination";
import JobDetailsExplain from "./JobDetailsExplain";
import "./RecentJobs.css";

const RecentJobs = () => {
  const jobData = useLoaderData();

  return (
    <>
      <div className="">
        {jobData?.map((job, i) => (
          <JobDetailsExplain job={job} key={job?._id} />
        ))}
      </div>

      {/* pagination */}
      <Pagination />
    </>
  );
};

export default RecentJobs;
