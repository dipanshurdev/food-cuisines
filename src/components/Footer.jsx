import React from "react";
import logoFooter from "../img/android-chrome-512x512.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="flex flex-row items-center gap-[4px]">
        <img src={logoFooter} alt="cuisines" width="30px" />
        <span className="text-slate-700"> &copy;cuisines </span>
      </div>
      <div className="text-slate-700 flex flex-row">
        <p className="text-sm max-mobile:text-xs  max-mobile:mx-[10px]">
          Terms & Conditions apply{" "}
        </p>
        <p className="text-sm max-mobile:text-xs max-mobile:mx-[10px]">
          All rights reserved
          <a
            href="https://www.github.com/dipanshurdev"
            target="_blank"
            rel="noreferrer"
            id="myName"
          >
            @Dipanshu rawat
          </a>
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px 0px;
  margin: 50px 0px 10px 0px;
  @media screen and (max-width: 490px) {
    flex-direction: column;
  }
`;
