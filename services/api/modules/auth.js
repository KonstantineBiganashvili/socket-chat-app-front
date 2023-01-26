import axios from '../index';

export const login = async (data) => axios.post('users/log-in', data);

export const signup = async (data) => axios.post('users', data);
