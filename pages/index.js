import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import Hero from "../src/sections/landing1/Hero";
import Brands from "../src/sections/landing1/Brands";
import Services from "../src/sections/landing3/Services";
import Categories from "../src/sections/landing1/Categories";
import Content1 from "../src/sections/landing1/Content1";
import FeaturedJobs from "../src/sections/landing1/FeaturedJobs";
import Content2 from "../src/sections/landing1/Content2";


const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Services/>
        {/* <Brands /> */}
        <Categories />
        <Content1 />
        <FeaturedJobs />
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
