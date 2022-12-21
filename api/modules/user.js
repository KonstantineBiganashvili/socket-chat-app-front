import axios from '../index';

export const getUser = async () => axios.get('users/current-user');

export const searchUsers = async (value) => axios.get(`users?search=${value}`);

export const editUser = async (id, value) => axios.patch(`users/${id}`, value);

export const uploadImg = async (value) =>
  axios.post('users/upload-file', value);

export const deleteImg = async (value) =>
  axios.delete('users/delete-file', value);
