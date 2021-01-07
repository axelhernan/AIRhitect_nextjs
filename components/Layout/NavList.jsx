import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const ListItems = [
  { id: 1, link: "/", text: "home" },
  { id: 2, link: "/aboutus", text: "about us" },
  { id: 3, link: "/projects", text: "works" },
  { id: 4, link: "/ourteam", text: "our team" },
  { id: 5, link: "/contact", text: "find us" },
];

const ListMenu = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? "block" : "none")};
  background: var(--white);
  width: 290px;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 5rem;

  li > a {
    padding: 1.5rem 2rem;
    display: block;
    color: var(--purple);
    font-weight: 300;
    font-size: 1.5rem;
    opacity: 1;

    @media screen and (min-width: 1024px) {
      &:hover {
        background: var(--grey);
        transition: background 0.15s ease-in-out;
        cursor: pointer;
      }
    }
  }
`;

const NavList = ({ open }) => {
  return (
    <ListMenu open={open}>
      {ListItems.map((item) => (
        <li key={item.id}>
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ListMenu>
  );
};

export default NavList;
