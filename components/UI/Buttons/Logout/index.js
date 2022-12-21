import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

import { clearToken } from '../../../../redux/slices/user';
import LogoutButton from './Logout.styles';

const Logout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearToken());
    router.push('/login');
  };

  return <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>;
};

export default Logout;
