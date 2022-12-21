import React from 'react';

import AppBar from '../../components/UI/AppBar';
import SideBar from '../../components/UI/SideBar';
import Wrapper from './HomeLayout.styles';

const HomeLayout = ({ children }) => (
  <>
    <AppBar />
    <Wrapper>
      <SideBar />
      {children}
    </Wrapper>
  </>
);

export default HomeLayout;
