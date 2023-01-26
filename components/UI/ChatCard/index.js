import React, { useEffect, useRef } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import {
  ChatCardWrapper,
  ChatContentContainer,
  ChatUser,
  Message,
  UserIconContainer,
} from './ChatCard.styles';

const ChatCard = ({ msg, isLast }) => {
  const { user_id: userId, text, username } = msg;

  const cardRef = useRef(null);

  const { id } = useSelector((state) => state.user.profile);

  useEffect(() => {
    if (isLast) {
      cardRef.current.scrollIntoView();
    }
  }, []);

  return (
    <ChatCardWrapper isUser={userId === id} ref={cardRef}>
      <UserIconContainer isUser={userId === id}>
        <FaRegUserCircle isUser={userId === id} />
      </UserIconContainer>
      <ChatContentContainer>
        <ChatUser isUser={userId === id}>{username}</ChatUser>
        <Message isUser={userId === id}>{text}</Message>
      </ChatContentContainer>
    </ChatCardWrapper>
  );
};

export default ChatCard;
