import React from 'react'

export default function Progress() {
    return (
      <section className="pt-7 pt-lg-28 pb-2 pb-lg-28">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
              <div className="text-center mb-8 mb-lg-18 px-xl-9 px-xxl-7">
                <h2 className="font-size-9 mb-6">
                  Инвестиции в наш
                  <br className="d-none d-sm-block" /> стартап
                </h2>
                {/* <p className="font-size-4 text-default-color px-xs-9 px-md-0">
                  Creating a beautiful job website is not easy always. To make
                  your life easier, we are introducing Justcamp template.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center">
            {/* start progress step item */}
            <div
              className="col-10 text-center process-step-style-03 simple md-margin-5-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="process-step-item">
                <div className="process-step-item-box">
                  <span className="process-step-item-box-bfr bg-medium-gray" />
                  <div className="process-step-icon">
                    <span className="process-step-number text-white font-weight-500">
                      <span className="process-step-number-bfr bg-light-orange" />
                      A
                      <span className="process-step-number-afr bg-gradient-magenta-orange-2" />
                    </span>
                  </div>
                  <div className="process-content last-paragraph-no-margin">
                    <h3 className="font-size-6 mb-7 text-black">
                      Серия А
                    </h3>
                    <p>
                      Получили 1,500$ от Unicorn Startup Center
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end progress step item */}
            {/* start progress step item */}
            <div
              className="col-10 text-center process-step-style-03 simple md-margin-5-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="process-step-item">
                <div className="process-step-item-box">
                  <span className="process-step-item-box-bfr bg-medium-gray" />
                  <div className="process-step-icon">
                    <span className="process-step-number text-white font-weight-500">
                      <span className="process-step-number-bfr bg-light-orange" />
                      B
                      <span className="process-step-number-afr bg-gradient-orange" />
                    </span>
                  </div>
                  <div className="process-content last-paragraph-no-margin">
                    <h3 className="font-size-6 mb-7">
                      Серия B
                    </h3>
                    <p>
                      Собираемся получить 5,000$ от Innopolis Campus Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end progress step item */}
            {/* start progress step item */}
            <div
              className="col-10 text-center process-step-style-03 simple xs-margin-5-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="process-step-item">
                <div className="process-step-item-box">
                  <span className="process-step-item-box-bfr bg-medium-gray" />
                  <div className="process-step-icon">
                    <span className="process-step-number text-white font-weight-500">
                      <span className="process-step-number-bfr bg-light-orange" />
                      C
                      <span className="process-step-number-afr bg-gradient-orange" />
                    </span>
                  </div>
                  <div className="process-content last-paragraph-no-margin">
                    <h3 className="font-size-6 mb-7">
                      Серия С
                    </h3>
                    <p>
                      Планируем получить 15,000$
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end progress step item */}
            {/* start progress step item */}
            <div
              className="col-10 text-center process-step-style-03 simple wow animate__fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="process-step-item">
                <div className="process-step-item-box">
                  <span className="process-step-item-box-bfr bg-medium-gray" />
                  <div className="process-step-icon">
                    <span className="process-step-number text-white font-weight-500">
                      <span className="process-step-number-bfr bg-light-orange" />
                      D
                      <span className="process-step-number-afr bg-gradient-orange" />
                    </span>
                  </div>
                  <div className="process-content last-paragraph-no-margin">
                    <h3 className="font-size-6 mb-7">
                      Серия D
                    </h3>
                    <p>
                        Планируем получить 40,000$
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end progress step item */}
          </div>
        </div>
      </section>
    );
}
