import Link from 'next/link';
import React from 'react';

import StyledNavLink from './NavLink.styles';

const NavLink = ({ text, href, image }) => (
  <Link href={href} passHref>
    <StyledNavLink>{image || text}</StyledNavLink>
  </Link>
);

export default NavLink;
