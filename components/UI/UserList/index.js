import React from 'react';

import UserCard from '../UserCard';
import { EmptyBox, UserListContainer } from './SearchList.styles';

const UserList = ({ users, isHidden, searchValue }) => {
  if (isHidden || searchValue?.length < 3) return;

  if (!users.length && searchValue?.length >= 3) {
    return <EmptyBox>User Could Not Be Found</EmptyBox>;
  }

  if (!users.length) {
    return <EmptyBox>Chat History Is Empty</EmptyBox>;
  }

  return (
    <UserListContainer>
      {users?.map((user) => (
        <UserCard key={user.id || user.chat_id} user={user} />
      ))}
    </UserListContainer>
  );
};
export default UserList;
