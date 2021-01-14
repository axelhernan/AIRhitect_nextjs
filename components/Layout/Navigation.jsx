import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { StyledLinkNav } from "../UI/Buttons";
import Burger from "../UI/Burger";
import Pagination from "./Pagination";

const ContentNavigation = styled.div`
  width: 100%;
  padding: 1.6rem 3.2rem;
  z-index: 100;
`;

const ContainerNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.6rem;
  position: relative;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const MyLogo = React.forwardRef(({ href, whiteLogo }, ref) => {
  return (
    <a className="marginAuto" href={href}>
      {whiteLogo === true ? (
        <Image
          src="/static/images/logo-airhitect-white.png"
          width="150"
          height="26"
          alt="AIRhitect"
        />
      ) : (
          <Image
            src="/static/images/logo-airhitect.png"
            width="150"
            height="26"
            alt="AIRhitect"
          />
        )}
    </a>
  );
});

const Navigation = ({ actualPage, whiteLogo }) => {
  return (
    <ContentNavigation>
      <ContainerNavigation>
        <Burger alt="menu" />
        <Link href="/" passHref>
          <MyLogo whiteLogo={whiteLogo} />
        </Link>
        <StyledLinkNav
          className="noneMobile"
          href="/contact"
          afterIcon={
            'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDI3IDE3Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzQ0M2Q1YjsKICAgICAgICBzdHJva2Utd2lkdGg6IDFweDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIxNy41IiBjeT0iOC41IiByPSI3LjUiLz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjkuNSIgY3k9IjguNSIgcj0iNy41Ii8+Cjwvc3ZnPgo=")'
          }
          alt="contact"
        >
          contact
        </StyledLinkNav>
      </ContainerNavigation>
      {actualPage === undefined ? null : <Pagination actualPage={actualPage} />}
    </ContentNavigation>
  );
};

export default Navigation;
