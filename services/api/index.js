import axios from 'axios';

const getToken = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('token')) {
    return JSON.parse(localStorage.getItem('token'));
  }
};

const responseSuccessHandler = (response) => response;
const responseErrorHanlder = (error) => {
  if (error.request && error.request.status === 401) {
    window.location = '/login';
    localStorage.removeItem('token');
  }
  return Promise.reject(error);
};
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  token: getToken(),
});

instance.interceptors.request.use((config) => {
  if (config.token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${config.token}`,
    };
  }

  return config;
});

instance.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHanlder(error),
);

export const setAuthToken = (token) => {
  instance.defaults.token = token;
};

export default instance;
