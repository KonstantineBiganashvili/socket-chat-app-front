import socket from '../index';

export const joinRoom = (id) => {
  socket.emit('joinRoom', id);
};

export const sendMessage = (messageData) => {
  socket.emit('send_message', {
    text: messageData.message,
    user_id: messageData.userId,
    chat_id: messageData.chatId,
    username: messageData.username,
  });
};

export const receiveMessage = () => {
  let newMessage;

  socket.on('receive_message', (data) => {
    newMessage = data;
  });

  return newMessage;
};

export const setTypingStatus = (value, params) => {
  if (value.length) {
    socket.emit('set_typing', {
      typing: true,
      username: params.username,
      chat_id: params.chatId,
      user_id: params.userId,
    });
  } else {
    socket.emit('set_typing', {
      typing: false,
      username: params.username,
      chat_id: params.chatId,
      user_id: params.userId,
    });
  }
};
