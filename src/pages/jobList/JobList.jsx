import React from "react";
import JobListHero from "../../components/jobListComp/JobListHero";
import JobFilter from "../../components/jobListComp/recentJobs/jobFilter/JobFilter";
import RecentJobs from "../../components/jobListComp/recentJobs/RecentJobs";
import UpComingEvent from "../../components/jobListComp/upComingEvents/UpComingEvent";
import CompanyBrand from "../../components/share/companyBrand/CompanyBrand";

const JobList = () => {
  return (
    <div className="max-w-[90%] mx-auto px-2">
      <JobListHero />
      <JobFilter />
      <RecentJobs />
      <UpComingEvent />
      <CompanyBrand />
    </div>
  );
};

export default JobList;
