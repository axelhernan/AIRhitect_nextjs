import React from "react";
import styled from "@emotion/styled";

const PaginationMessage = styled.h2`
  background: var(--white);
  padding: 1rem 1.5rem;
  font-weight: 900;
  display: initial;
`;

const Pagination = ({ actualPage }) => {
  return <PaginationMessage>{actualPage}</PaginationMessage>;
};

export default Pagination;
