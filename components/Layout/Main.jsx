import styled from "@emotion/styled";

const Main = styled.main`
  height: ${({ setFullHeight }) => setFullHeight || "100%"};
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export default Main;
