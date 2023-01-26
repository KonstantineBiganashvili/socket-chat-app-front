import { setAuthToken } from '../../services/api';
import { login, signup } from '../../services/api/modules/auth';
import {
  setErrorNotification,
  setSuccessNotification,
} from '../slices/appState';
import { setToken } from '../slices/user';

export const loginAction = (formValues, router) => async (dispatch) => {
  try {
    const {
      data: { accessToken },
    } = await login(formValues);

    localStorage.setItem('token', JSON.stringify(accessToken));
    setAuthToken(accessToken);
    dispatch(setToken(accessToken));
    dispatch(setSuccessNotification('Successfully Logged In'));

    router.push('/');
  } catch (err) {
    dispatch(
      setErrorNotification(
        err?.response?.data?.response?.message ||
          'Oops... Something Went Wrong!',
      ),
    );
  }
};

export const signupAction = (formValues, router) => async (dispatch) => {
  try {
    const response = await signup(formValues);

    if (response.status === 201) {
      dispatch(setSuccessNotification('Successfully Registered'));
      router.push('/login');
    }
  } catch (err) {
    dispatch(
      setErrorNotification(
        err?.response?.data?.message || 'Oops... Something Went Wrong!',
      ),
    );
  }
};
