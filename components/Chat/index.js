import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeLayout from '../../layouts/HomeLayout';
import { getUserData } from '../../redux/actions/user';
import { getMessages } from '../../services/api/modules/chat';
import socket from '../../services/sockets';
import {
  joinRoom,
  sendMessage,
  setTypingStatus,
} from '../../services/sockets/modules/chat';
import ActionButton from '../UI/Buttons/ActionButton';
import ChatCard from '../UI/ChatCard';
import ChatInput from '../UI/Inputs/ChatInput';
import Loader from '../UI/Loader';
import {
  ChatActionContainer,
  ChatPageContainer,
  ChatsContainer,
  TypingStatusContainer,
} from './Chat.styles';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [chatId, setChatId] = useState('');
  const [typingUser, setTypingUser] = useState([]);

  const isLoading = useSelector((state) => state.user.isLoading);
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const getPreviousMessages = async (id) => {
    const { data } = await getMessages(id);
    setMessageList(data);
  };

  const typingUsername = (id) => {
    if (typingUser.length) {
      const someoneTyping = typingUser.filter((user) => user.id !== id);

      if (someoneTyping.length && someoneTyping[0].typing) {
        return someoneTyping[0].username;
      }
    }
    return '';
  };

  useEffect(() => {
    if (router.query.id) {
      dispatch(getUserData());
      setChatId(router.query.id);
      joinRoom(router.query.id);
      getPreviousMessages(router.query.id);
    }
  }, [router.query.id]);

  const handleSend = () => {
    setMessage('');

    setTypingStatus('', {
      chatId,
      userId: profile.id,
      username: profile.username,
    });

    sendMessage({
      message,
      userId: profile.id,
      chatId,
      username: profile.username,
    });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((oldMessages) => [...oldMessages, data]);
    });

    socket.on('typing', (data) => {
      setTypingUser((oldTypingUser) => {
        const indexOfUser = oldTypingUser.findIndex((el) => el.id === data.id);

        if (indexOfUser === -1) {
          return [...oldTypingUser, data];
        }
        if (oldTypingUser[indexOfUser].typing !== data.typing) {
          oldTypingUser[indexOfUser].typing = data.typing;
          return [...oldTypingUser];
        }

        return [...oldTypingUser];
      });
    });
  }, []);

  const handleChange = (e) => {
    setTypingStatus(e.target.value, {
      chatId,
      userId: profile.id,
      username: profile.username,
    });
    setMessage(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HomeLayout>
      <ChatPageContainer>
        <ChatsContainer>
          {messageList.length ? (
            messageList.map((msg, index) => (
              // eslint-disable-next-line react/jsx-indent
              <ChatCard
                key={msg.id || msg.message_id}
                msg={msg}
                isLast={messageList.length - 1 === index}
              />
            ))
          ) : (
            <Loader />
          )}
        </ChatsContainer>
        <ChatActionContainer>
          <ChatInput message={message} handleChange={handleChange} />
          <ActionButton text="Send" onClick={handleSend} />
        </ChatActionContainer>
        <TypingStatusContainer>
          {typingUsername(profile.id) &&
            `${typingUsername(profile.id)} is typing...`}
        </TypingStatusContainer>
      </ChatPageContainer>
    </HomeLayout>
  );
};

export default Chat;
