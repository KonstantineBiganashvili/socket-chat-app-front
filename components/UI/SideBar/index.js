import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import UserCard from '../UserCard';
import UserList from '../UserList';
import {
  CloseButton,
  CurrentUser,
  ListContainer,
  SideBarButton,
  SideBarContainer,
  SideBarWrapper,
} from './SideBar.styles';

const SideBar = () => {
  const [isHidden, setHidden] = useState(true);
  const { profile, chats } = useSelector((state) => state.user);

  const handleSidebar = (value) => {
    setHidden(value);
  };

  return (
    <SideBarContainer>
      <SideBarButton onClick={() => handleSidebar(false)}>
        <AiOutlineMenu />
      </SideBarButton>
      <SideBarWrapper
        as={motion.div}
        animate={{ x: isHidden ? -400 : 400 }}
        transition={{ duration: 0.5 }}
      >
        <CloseButton onClick={() => handleSidebar(true)}>
          <AiFillCloseCircle />
        </CloseButton>
        <ListContainer>
          <UserList users={chats} />
        </ListContainer>
        <Link href="/user/profile" passHref>
          <CurrentUser>
            <UserCard user={profile} />
          </CurrentUser>
        </Link>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
