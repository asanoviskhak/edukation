import React from "react";

import { Select } from "../../components/Core";
import imgH from "../../assets/image/l1/png/hero-image-woman.png";
import imgP from "../../assets/image/patterns/hero-pattern.png";

const defaultCountries = [
  { value: "sp", label: "Singapore" },
  { value: "bd", label: "Bangladesh" },
  { value: "usa", label: "United States of America" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "pk", label: "Pakistan" },
];

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden">
        {/* <!-- .Hero pattern --> */}
        <div className="pos-abs-tr w-50 z-index-n2">
          <img src={imgP} alt="" className="gr-opacity-1" />
        </div>
        {/* <!-- ./Hero pattern --> */}
        <div className="container">
          <div className="row position-relative align-items-center">
            <div
              className="col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-5 pb-lg-33 pb-xl-34 pb-md-33 pb-10"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <h1 className="font-size-11 mb-12 pr-md-30 pr-lg-0">
                Хочешь обучаться в Южной Корее?
              </h1>
              <p className="font-size-5">
                Получи бесплатную консультацию!
                Забронируй себе место для онлайн встреч
              </p>
              <a href="#" className="btn btn-primary h-100 text-uppercase">
                Забронировать место
              </a>
              
            </div>
            {/* <!-- Hero Right Image --> */}
            <div
              className="col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className=" ml-xxl-23 ml-xl-12 ml-md-7">
                <img src={imgH} alt="" className="w-100" />
              </div>
            </div>
            {/* <!-- ./Hero Right Image --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
