import React from "react";
import FeatureProfile from "../../components/homeComp/featureProfile/FeatureProfile";
import JobFilter from "../../components/jobListComp/recentJobs/jobFilter/JobFilter";
import CompanyBrand from "../../components/share/companyBrand/CompanyBrand";
import Pagination from "../../components/share/pagination/Pagination";
import UserChart from "../../components/userAreaComp/userProgrammerChart/UserChart";
import UserSearch from "../../components/userAreaComp/userSearch/UserSearch";

const UserArea = () => {
  return (
    <div>
      <UserSearch />
      <div className="md:max-w-[90%] mx-auto px-2">
        <FeatureProfile />
        <div className="mt-16">
          <JobFilter />
        </div>
        <UserChart />
        <Pagination />
        <div className="my-12">
          <CompanyBrand />
        </div>
      </div>
    </div>
  );
};

export default UserArea;
