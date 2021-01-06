import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const ListItems = [
    { id: 1, link: '/', text: 'home' },
    { id: 2, link: '/aboutus', text: 'about us' },
    { id: 3, link: '/projects', text: 'works' },
    { id: 4, link: '/ourteam', text: 'our team' },
    { id: 5, link: '/contact', text: 'find us' },
]

const ListMenu = styled.ul`
  list-style: none;
  display: ${({ open }) => open ? 'block' : 'none'};
  background:var(--white);
  width: 290px;
  transition: transform 0.3s ease-in-out;

  position:absolute;
  z-index: 1;
  left:0;
  top:7rem;

  li > a {
      padding:1.5rem 2rem;
      display:block;
      color:var(--purple);
      font-weight:100;
      font-size:1.5rem;

      @media screen and (min-width:1200px){
        &:hover{
            background:var(--grey);
            transition: background .15s ease-in-out;
            cursor:pointer
        }
      }
  }
`;


const NavList = ({ open }) => {
    return (
        <ListMenu open={open}>
            { ListItems.map((item) =>
            (<li key={item.id}>
                <Link href={item.link}>
                    {item.text}
                </Link>
            </li>))
            }
        </ListMenu>
    )
}

export default NavList