import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/logo-black.svg";
import imgL1LogoWhite from "../../assets/image/logo-white.svg";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <img width="150" src={imgL1LogoWhite} alt="edukation-logo-white" />
        ) : (
          <img width="150" src={imgL1Logo} alt="edukation-logo" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
