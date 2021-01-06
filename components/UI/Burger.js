import React, { useState } from 'react';
import styled from '@emotion/styled';
import Buttons,{StyledLinkNav} from './Buttons';
import NavList from '../Layout/NavList';


const StyledBurger = styled.span`
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  
  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : 'var(--purple)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    @media screen and (min-width:768px){
      margin-right:1rem;
    }


    &:nth-of-type(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-of-type(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
    <StyledLinkNav open={open} onClick={() => setOpen(!open)}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <span className='noneMobile'>menu</span>
    </StyledLinkNav>
    <NavList open={open}/>
    </>
  )
}
export default Burger