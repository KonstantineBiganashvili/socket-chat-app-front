import axios from '../index';

export const createChat = async (value) => axios.post('chats', value);

export const getMessages = async (value) => axios.get(`chats/${value}`);
