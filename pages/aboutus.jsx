import React from "react";
import Layout from "../components/Layout/Layout";
import ContentCenter from "../components/Layout/ContentCenter";
import styled from "@emotion/styled";
import { GridThree } from "../components/UI/Grid";

const SubHeadline = styled.h2`
  width: 300px;

  &::after,
  &::before {
    content: "";
    display: block;
    border-bottom: solid 2px var(--purple);
    width: 250px;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

const aboutus = () => {
  return (
    <Layout
      setBackground="var(--cream)"
      whiteLogo={false}
      actualPage={"about us"}
    >
      <ContentCenter>
        <SubHeadline>
          Mauris tortor leo, volutpat ut lacus at, maximus eleifend dolor.
          <strong>Orci varius natoque penatibus et magnis</strong> dis
          parturient montes, nascetur ridiculus mus.
        </SubHeadline>
        <GridThree>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            porttitor elit augue. Quisque tempor cursus gravida. Sed accumsan
            urna dolor, ut ultrices
          </p>
          <p>
            vulputate metus viverra a. Donec nisi mi, facilisis vitae ante at,
            tempus pellentesque nisi. Duis imperdiet vehicula facilisis. Sed vel
            ante leo. Maecenas dolor mi, vehicula
          </p>
          <p>
            dignissim, vel ultrices erat mattis. Quisque nunc magna, finibus ut
            magna ut, convallis convallis urna. Quisque sit amet ex faucibus,
            laoreet urna nec, iaculis ligula.
          </p>
        </GridThree>
      </ContentCenter>
    </Layout>
  );
};

export default aboutus;
