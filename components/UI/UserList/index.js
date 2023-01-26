import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setErrorNotification } from '../../../redux/slices/appState';
import { createChat } from '../../../services/api/modules/chat';
import UserCard from '../UserCard';
import { EmptyBox, UserListContainer } from './SearchList.styles';

const UserList = ({ users, isHidden, searchValue }) => {
  const { id } = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  if (isHidden || searchValue?.length < 3) return;

  if (!users.length && searchValue?.length >= 3) {
    return <EmptyBox>User Could Not Be Found</EmptyBox>;
  }

  if (!users.length) {
    return <EmptyBox>Chat History Is Empty</EmptyBox>;
  }

  const handleClick = async (user) => {
    try {
      if (user.id) {
        const response = await createChat({
          user_from: id,
          user_to: user.id,
        });
        const chatId = response.data.id;
        return router.push(`/chat/${chatId}`);
      }

      router.push(`/chat/${user.chat_id}`);
    } catch (err) {
      dispatch(
        setErrorNotification(
          err?.response?.data?.response?.message ||
            'Oops... Something Went Wrong!',
        ),
      );
    }
  };

  return (
    <UserListContainer>
      {users?.map((user) => (
        <UserCard
          key={user.id || user.chat_id}
          user={user}
          handleClick={handleClick}
        />
      ))}
    </UserListContainer>
  );
};
export default UserList;
