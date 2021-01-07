import React from "react";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Grid, { GridFive } from "../components/UI/Grid";

const OurTeam = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    height: 100%;
  }
`;

const PeopleAirhitect = [
  {
    id: 1,
    name: "Colleague Name",
    role: "CEO",
    text: "esto deberia cambiar ahora mismo",
    alt: "Colleague Name",
  },
  {
    id: 2,
    name: "Colleague Name",
    role: "Administration",
    text: "esto deberia cambiar ahora mismo",
    alt: "Colleague Name",
  },
  {
    id: 3,
    name: "Colleague Name",
    role: "Architect",
    text: "esto deberia cambiar ahora mismo",
    alt: "Colleague Name",
  },
  {
    id: 4,
    name: "Colleague Name",
    role: "Architect",
    text: "esto deberia cambiar ahora mismo",
    alt: "Colleague Name",
  },
  {
    id: 5,
    name: "Colleague Name",
    role: "Architect",
    text: "esto deberia cambiar ahora mismo",
    alt: "Colleague Name",
  },
];

const aboutus = () => {
  return (
    <Layout whiteLogo={false} actualPage={"our team"}>
      <OurTeam>
        <GridFive>
          {PeopleAirhitect.map((people) => (
            <div key={people.id}>
              <Image
                src="/static/images/people-AIRhitect.png"
                width="160"
                height="160"
                alt={people.alt}
              />
              <h3>
                {people.name}
                <span
                  css={css`
                    font-weight: 300;
                    display: block;
                    text-align: center;
                  `}
                >
                  {people.role}
                </span>
              </h3>
              <p>{people.text}</p>
            </div>
          ))}
        </GridFive>
      </OurTeam>
    </Layout>
  );
};

export default aboutus;
