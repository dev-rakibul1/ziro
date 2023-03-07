import React from "react";
import Choose from "../../components/homeComp/choose/Choose";
import Counter from "../../components/homeComp/counter/Counter";
import Customer from "../../components/homeComp/customer/Customer";
import FeaturedJobs from "../../components/homeComp/featuredJobs/FeaturedJobs";
import FeatureProfile from "../../components/homeComp/featureProfile/FeatureProfile";
import HeroSlide from "../../components/homeComp/heroSlide/HeroSlide";
import JobArea from "../../components/homeComp/jobArea/JobArea";
import LastNews from "../../components/homeComp/newsArea/LastNews";
import Pricing from "../../components/homeComp/pricing/Pricing";
import CompanyBrand from "../../components/share/companyBrand/CompanyBrand";

const Home = () => {
  return (
    <div className="max-w-[90%] mx-auto px-2">
      <HeroSlide />
      <CompanyBrand />
      <JobArea />
      <Choose />
      <FeatureProfile />
      <FeaturedJobs />
      <Customer />
      <Counter />
      <Pricing />
      <LastNews />
    </div>
  );
};

export default Home;
