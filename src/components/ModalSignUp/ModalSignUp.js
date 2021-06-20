import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";

const ModalStyled = styled(Modal)`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignUp = (props) => {
  const [showPassFirst, setShowPassFirst] = useState(true);
  const [showPassSecond, setShowPassSecond] = useState(true);

  const gContext = useContext(GlobalContext);
  const handleClose = () => {
    gContext.toggleSignUpModal();
  };

  const togglePasswordFirst = () => {
    setShowPassFirst(!showPassFirst);
  };

  const togglePasswordSecond = () => {
    setShowPassSecond(!showPassSecond);
  };

  return (
    <ModalStyled
      {...props}
      size="lg"
      centered
      show={gContext.signUpModalVisible}
      onHide={gContext.toggleSignUpModal}
    >
      <Modal.Body className="p-0">
        <button
          type="button"
          className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="login-modal-main bg-white rounded-8 overflow-hidden">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-6">
              <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                <div className="pb-9">
                  <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                    Напиши нам и получи консультацию
                  </h3>
                  <p className="mb-0 font-size-4 text-white">
                    Наши консультанты свяжутся с тобой как можно скорее по имэйлу или по ватсапу
                  </p>
                </div>
                <div className="border-top border-default-color-2 mt-auto">
                  <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">99</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        Прошли консультацию
                      </p>
                    </div>
                    <div className="pt-5 px-9">
                      <h3 className="font-size-7 text-white">88</h3>
                      <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                        Прошли в универы
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                {/* <div className="row">
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Import from LinkedIn
                      </span>
                    </a>
                  </div>
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Import from Google
                      </span>
                    </a>
                  </div>
                  <div className="col-4 col-xs-12">
                    <a
                      href="/#"
                      className="font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4"
                    >
                      <i className="fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                      <span className="d-none d-xs-block">
                        Import from Facebook
                      </span>
                    </a>
                  </div>
                </div>
                <div className="or-devider">
                  <span className="font-size-3 line-height-reset">Or</span>
                </div> */}
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    {/* You still need to add the hidden input with the form name to your JSX form */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                      <div className="col-12 mb-7">
                        <label
                          htmlFor="name"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Твое имя
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Айбек Беков"
                          id="name"
                          name="name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="email"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Электропочта
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="aibek.b@gmail.com"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="col-lg-6 mb-7">
                        <label
                          htmlFor="subject"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Ватсап
                        </label>
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="0555123456"
                          id="subject"
                          name="subject"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mb-7">
                        <label
                          htmlFor="message"
                          className="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset"
                        >
                          Сообщение
                        </label>
                        <textarea
                          id="message"
                          placeholder="Напиши чем интересуешься и о чем хочешь поговорить"
                          className="form-control h-px-144"
                          name="message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-lg-12 pt-4">
                        <button
                          type="submit"
                          className="btn btn-primary text-uppercase w-100 h-px-48"
                        >
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                  
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </ModalStyled>
  );
};

export default ModalSignUp;
