import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import Hero from "../src/sections/landing2/Hero";
import Brands from "../src/sections/landing2/Brands";
import Categories from "../src/sections/landing2/Categories";
import Content1 from "../src/sections/landing2/Content1";
import FeaturedJobs from "../src/sections/landing2/FeaturedJobs";
import Blog from "../src/sections/landing2/Blog";
import Content2 from "../src/sections/landing2/Content2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Brands />
        <Categories />
        <Content1 />
        <FeaturedJobs />
        <Blog />
        <Content2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
