import React from "react";
// import Header from './Header';
import { Global, css } from "@emotion/react";
import Head from "next/head";
import Main from "./Main";
import Navigation from "./Navigation";

const Layout = ({
  setBackground,
  children,
  actualPage,
  whiteLogo,
  setFullHeight,
}) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --purple: #443d5b;
            --blackpurple: #302a40;
            --cream: #eae6eb;
            --grey: #f4f2f5;
            --black: #000000;
            --white: #ffffff;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: "Lato", sans-serif;
          }
          h1,
          h2 {
            margin: 0 0 1rem 0;
            line-height: 1.5;
            font-family: "Lato", sans-serif;
            font-weight: 300;
            color: var(--purple);
          }
          h1 {
            font-size: 4rem;
            @media screen and (min-width: 768px) {
              font-size: 6rem;
            }
          }
          h2 {
            font-size: 3rem;
            font-family: "Lato", sans-serif;
            strong {
              font-weight: 900;
            }
          }
          h3 {
            font-size: 2.5rem;
            font-family: "Lato", sans-serif;
            font-weight: 900;
            color: var(--purple);
          }
          p {
            margin: 0;
            font-weight: 300;
            line-height: 3rem;
            font-size: 1.5rem;
            text-align: left;
            color: var(--purple);
            font-family: "Lato", sans-serif;
          }
          strong {
            font-family: "Lato", sans-serif;
            font-weight: 900;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            font-family: "Nunito", sans-serif;
          }
          a {
            font-family: "Lato", sans-serif;
            text-decoration: none;
            font-weight: 300;
          }
          img {
            max-width: 100%;
          }

          textarea {
            height: 100px;
            resize: none;
            width: 100%;
          }

          input,
          textarea {
            font-family: "Lato", sans-serif;
            font-weight: 300;
            background: var(--blackpurple);
            border: none;
            padding: 1rem 2rem;
            color: var(--white);
            margin: 1rem 0;
          }

          .marginAuto {
            margin: auto;
          }

          .noneMobile {
            display: none;
          }

          .map {
            height: 500px;
            width: 100%;
            margin-top: 4rem;
          }
          .rec .rec-carousel {
            position: relative;

            button {
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              z-index: 1;
              background: var(--white);
              border: none;
              cursor: pointer;
              height: 60px;

              &:hover {
                opacity: 0.5;
                transition: opacity 0.5s ease-in-out;
              }

              &:nth-of-type(1) {
                left: 2rem;

                &::after {
                  content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTIuMDYgNDc3LjE4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQ0M2Q1Yjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkNhcGFfMSIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMuODksMjQ4LjEsMjI5LDQ3My4yYTEzLjUxLDEzLjUxLDAsMCwwLDE5LjEtMTkuMUwzMi41OSwyMzguNiwyNDguMDksMjMuMUExMy41NSwxMy41NSwwLDAsMCwyMzguNTksMGExMy4xNywxMy4xNywwLDAsMC05LjUsNEw0LDIyOS4xQTEzLjQzLDEzLjQzLDAsMCwwLDMuODksMjQ4LjFaIi8+PC9nPjwvZz48L3N2Zz4=");
                  width: 20px;
                  display: block;
                }
              }

              &:nth-of-type(2) {
                right: 2rem;

                &::after {
                  content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTIuMDYgNDc3LjE4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQ0M2Q1Yjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkNhcGFfMSIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0OC4xOCwyMjkuMDgsMjMuMDgsNEExMy41MSwxMy41MSwwLDAsMCw0LDIzLjA4bDIxNS41LDIxNS41TDQsNDU0LjA4YTEzLjQ0LDEzLjQ0LDAsMCwwLDAsMTkuMSwxMy41OSwxMy41OSwwLDAsMCw5LjUsNCwxMy4yMSwxMy4yMSwwLDAsMCw5LjUtNGwyMjUuMS0yMjUuMUExMy40MywxMy40MywwLDAsMCwyNDguMTgsMjI5LjA4WiIvPjwvZz48L2c+PC9zdmc+");
                  width: 20px;
                  display: block;
                }
              }
            }
          }
          .rec .rec-slider-container {
            margin: 0;
          }

          @media screen and (min-width: 992px) {
            .noneMobile {
              display: initial;
            }
            .marginAuto {
              margin: inherit;
            }
            .map {
              height: 100vh;
              margin-top: 0;
              top: -15rem;
              position: absolute !important;
              right: 0;
              width: 100%;
            }
          }
        `}
      />

      <Head>
        <title>AIRhitect</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;900&display=swap"
          rel="stylesheet"
        />
        <link href="/static/css/main.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <meta name="og:title" content="AIRhitect" />
        <meta name="og:description" content="dedicated to the future" />
        <meta
          name="og:image"
          content="/static/images/slider/project-airhitect-01.jpg"
        />
        <meta name="og:card" content="summary_large_image" />

        <meta name="twitter:title" content="AIRhitect" />
        <meta name="twitter:description" content="dedicated to the future" />
        <meta
          name="twitter:image"
          content="/static/images/slider/project-airhitect-01.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Main setBackground={setBackground} setFullHeight={setFullHeight}>
        <Navigation actualPage={actualPage} whiteLogo={whiteLogo} />
        {children}
      </Main>
    </>
  );
};

export default Layout;
