import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import LogoutButton from '../Buttons/Logout';
import NavLink from '../NavLink';
import { AppBarContainer, InfoContainer } from './AppBar.styles';
import Search from './Search';

const AppBar = () => {
  const {
    profile: { username },
  } = useSelector((state) => state.user);

  return (
    <AppBarContainer>
      <NavLink
        image={<Image src="/img/home.png" width={80} height={80} />}
        href="/"
      />
      <Search />
      <InfoContainer>
        {username}
        <LogoutButton />
      </InfoContainer>
    </AppBarContainer>
  );
};

export default AppBar;
