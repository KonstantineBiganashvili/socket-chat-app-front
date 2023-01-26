import { io } from 'socket.io-client';

const getToken = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    return JSON.parse(localStorage.getItem('token'));
  }
};

const socket = io.connect(process.env.NEXT_PUBLIC_BASE_API_URL, {
  extraHeaders: {
    authorization: `${getToken()}`,
  },
});

export default socket;
