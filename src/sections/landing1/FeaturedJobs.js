import React, {useEffect, useState} from "react";
import Link from "next/link";
import imgF1 from "../../assets/image/l1/png/feature-brand-1.png";
import imgF2 from "../../assets/image/l1/png/feature-brand-2.png";
import imgF3 from "../../assets/image/l1/png/feature-brand-3.png";
import imgF4 from "../../assets/image/l1/png/feature-brand-4.png";
import imgF5 from "../../assets/image/l1/png/feature-brand-5.png";
import imgF6 from "../../assets/image/l1/png/feature-brand-6.png";
import {getContent} from '../../../lib/api'
const axios = require('axios');


  
export default function FeaturedJobs ({content, name}) {
  const [data, setData] = useState({})
  // const NOTION_API_SECRET="secret_Fm2IDh3zQXNfd1cTAQBW24VXpIuIcfEnqtF5S7TSH9I"
  // const NOTION_DATABASE = "78b6c8d24ebe439bbb5a32d8815693ca"
  useEffect(() => {
    if (content){
      console.log(content)
    }
  }, [])

  return (
    <>
      {/* <!-- FeaturedJobs Area -->  */}
      <div className="pt-11 pt-lg-27 pb-7 pb-lg-26 bg-black-2 dark-mode-texts">
        <div className="container">
          {/* <!-- Section Top --> */}
          <div className="row align-items-center pb-14">
            {/* <!-- Section Title --> */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h2 className="font-size-9 font-weight-bold">{name}</h2>
              </div>
            </div>
            {/* <!-- Section Button --> */}
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="text-center text-lg-right">
                <Link href="/#">
                  <a className="btn btn-outline-white text-uppercase">
                    Воспользуйся ими <i>😀</i>
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Section Button End --> */}
          </div>
          {/* <!-- End Section Top --> */}
          <div className="row justify-content-center">
          {content ? content.map(uni => (
                <div
                className="col-12 col-lg-4 col-md-6 px-xxl-7"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {/* <!-- Start Feature One --> */}
                
                <div key={uni.id} className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                  <div className="d-block mb-7">
                    <Link href="/#">
                      <a>
                        <img src={imgF1} alt="" />
                      </a>
                    </Link>
                  </div>
                  <Link href="/#">
                    <a className="font-size-3 d-block mb-0 text-gray">
                      Google INC
                    </a>
                  </Link>
                  <h2 className="mt-n4">
                    <Link href="/#">
                      <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                        {uni.properties.Name.title[0].plain_text}
                      </a>
                    </Link>
                  </h2>
                  <ul className="list-unstyled mb-1 card-tag-list">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Berlyn
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          Full-time
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                          <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p className="mb-7 font-size-4 text-gray">
                    We are looking for Enrollment Advisors who are looking to take
                    30-35 appointments per week. All leads are pre-scheduled.
                  </p>
                  <div className="card-btn-group">
                    <Link href="/#">
                      <a className="btn btn-green text-uppercase btn-medium rounded-3">
                        Apply Now
                      </a>
                    </Link>
                    <Link href="/#">
                      <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                        <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                        Save it
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <!-- End Feature One --> */}
              </div>
            ))
            :
            <div
                className="col-12 col-lg-4 col-md-6 px-xxl-7"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {/* <!-- Start Feature One --> */}
                
                <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
                  <div className="d-block mb-7">
                    <Link href="/#">
                      <a>
                        <img src={imgF1} alt="" />
                      </a>
                    </Link>
                  </div>
                  <Link href="/#">
                    <a className="font-size-3 d-block mb-0 text-gray">
                      Google INC
                    </a>
                  </Link>
                  <h2 className="mt-n4">
                    <Link href="/#">
                      <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                        UNIST
                      </a>
                    </Link>
                  </h2>
                  <ul className="list-unstyled mb-1 card-tag-list">
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                          <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                          Berlyn
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                          <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                          Full-time
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                          <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                          80K-90K
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p className="mb-7 font-size-4 text-gray">
                    We are looking for Enrollment Advisors who are looking to take
                    30-35 appointments per week. All leads are pre-scheduled.
                  </p>
                  <div className="card-btn-group">
                    <Link href="/#">
                      <a className="btn btn-green text-uppercase btn-medium rounded-3">
                        Apply Now
                      </a>
                    </Link>
                    <Link href="/#">
                      <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                        <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                        Save it
                      </a>
                    </Link>
                  </div>
                </div>
                {/* <!-- End Feature One --> */}
              </div>
            
            
            }
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const content = await getContent();
  if (!content) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      content,
      name:"Hello World!"
      // database: process.env.NOTION_DATABASE
    },
    revalidate: 3600
  };
}
