import React from 'react'

export default function Team() {
    return (
      <section className="big-section wow animate__fadeIn">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
              <div className="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
                <h2 className="font-size-9 mb-6">
                  Наша команда
                </h2>
                {/* <p className="font-size-4 text-default-color px-xs-9 px-md-0">
                  Creating a beautiful job website is not easy always. To make
                  your life easier, we are introducing Justcamp template.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
            {/* start team item */}
            <div
              className="col team-style-01 text-left sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="team-1" src="https://picsum.photos/500/530" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange border-radius-5px" />
                </div>
                <figcaption className="d-flex flex-column padding-60px-lr padding-50px-tb md-padding-30px-all">
                  <div className="social-icon">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                  </div>
                  <span className="team-title d-block padding-one-bottom alt-font text-extra-medium text-white font-weight-500 mt-auto">
                    Dosbol Kasymov
                  </span>
                  <span className="team-sub-title d-block text-medium text-white-transparent alt-font">
                    CEO & Co-Founder
                  </span>
                </figcaption>
              </figure>
            </div>
            {/* end team item */}
            {/* start team item */}
            <div
              className="col team-style-01 text-left sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="team-2" src="https://picsum.photos/500/530" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange border-radius-5px" />
                </div>
                <figcaption className="d-flex flex-column padding-60px-lr padding-50px-tb md-padding-30px-all">
                  <div className="social-icon">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                  </div>
                  <span className="team-title d-block padding-one-bottom alt-font text-extra-medium text-white font-weight-500 mt-auto">
                    Eleonora Kyrbieva
                  </span>
                  <span className="team-sub-title d-block text-medium text-white-transparent alt-font">
                    COO & Co-Founder
                  </span>
                </figcaption>
              </figure>
            </div>
            {/* end team item */}
            {/* start team item */}
            <div
              className="col team-style-01 text-left wow animate__fadeInUp"
              data-wow-delay="0.6s"
            >
              <figure className="border-radius-5px">
                <div className="team-member-image">
                  <img alt="team-3" src="https://picsum.photos/500/530" />
                  <div className="team-overlay bg-transparent-gradient-shamrock-green-light-orange border-radius-5px" />
                </div>
                <figcaption className="d-flex flex-column padding-60px-lr padding-50px-tb md-padding-30px-all">
                  <div className="social-icon">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="icon-extra-small text-white"
                    >
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                  </div>
                  <span className="team-title d-block padding-one-bottom alt-font text-extra-medium text-white font-weight-500 mt-auto">
                    Iskhak Asanov
                  </span>
                  <span className="team-sub-title d-block text-medium text-white-transparent alt-font">
                    CTO & Co-Founder
                  </span>
                </figcaption>
              </figure>
            </div>
            {/* end team item */}
          </div>
        </div>
      </section>
    );
}
