import styled from "@emotion/styled";

export const StyledLinkNav = styled.a`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  background: var(--white);
  color: var(--purple);
  padding: 0.5rem 1.5rem;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &::before {
    content: ${(props) => props.afterIcon};
    margin-right: 1rem;
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    &:hover {
      background: var(--grey);
      transition: background 0.15s ease-in-out;
    }
  }
`;

export const StyledLink = styled.a`
  color: var(--white);
  text-decoration: underline;

  @media screen and (min-width: 1200px) {
    &:hover {
      background: var(--grey);
      transition: background 0.15s ease-in-out;
    }
  }
`;

export const Styledbutton = styled.button`
    font-family: 'Lato', sans-serif;
    font-weight:300;
    background:var(--white);
    border:0
    color:var(--purple);
    padding:1rem .5rem;
    width:200px;
    text-transform:uppercase;
    cursor:pointer;

    @media screen and (min-width:1200px){
        &:hover{
              background:var(--grey);
              transition: background .15s ease-in-out;
        }
    }
`;

export const CloseModal = styled.button`
  height: 19px;
  width: 30px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  z-index: 20;
  border: none;
  background: var(--white);

  position: absolute;
  top: 2rem;
  right: 2rem;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s linear;
    cursor: pointer;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: var(--purple);
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-of-type(1) {
      transform: rotate(45deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      transform: rotate(-45deg);
    }
  }
`;

export default { StyledLinkNav, StyledLink, Styledbutton, CloseModal };
