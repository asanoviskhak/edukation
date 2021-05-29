import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import Hero from "../src/sections/landing3/Hero";
import Services from "../src/sections/landing3/Services";
import FeaturedJobs from "../src/sections/landing3/FeaturedJobs";
import Content1 from "../src/sections/landing3/Content1";
import Content2 from "../src/sections/landing3/Content2";
import Slider from "../src/sections/landing3/Slider";
import Pricing from "../src/sections/landing3/Pricing";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        <Hero />
        <Services />
        <FeaturedJobs />
        <Content1 />
        <Content2 />
        <Slider />
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
