import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const InlineList = styled.ul`
  align-content: center;
  display: flex;
  align-items: center;

  li {
    margin: 0 2rem 2rem 0;

    a {
      color: var(--white);

      svg {
        width: 20px;
      }
    }

    &:hover {
      opacity: 0.4;
      transition: opacity 0.15s ease-in-out;
    }
  }
`;

const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const GooglePlus = <FontAwesomeIcon icon={faGooglePlusG} />;
const Facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const Instagram = <FontAwesomeIcon icon={faInstagram} />;

const SocialMediaIcons = [
  { id: 1, link: "http://linkedin.com", icon: Linkedin, alt: "icon linkedin" },
  { id: 2, link: "http://facebook.com", icon: Facebook, alt: "icon facebook" },
  {
    id: 3,
    link: "http://instagram.com",
    icon: Instagram,
    alt: "icon instagram",
  },
  { id: 4, link: "http://google.com", icon: GooglePlus, alt: "icon google+" },
];

const IconsMedia = () => {
  return (
    <InlineList>
      {SocialMediaIcons.map((MediaIcon) => (
        <li key={MediaIcon.id}>
          <a href={MediaIcon.link} alt={MediaIcon.alt}>
            {MediaIcon.icon}
          </a>
        </li>
      ))}
    </InlineList>
  );
};

export default IconsMedia;
