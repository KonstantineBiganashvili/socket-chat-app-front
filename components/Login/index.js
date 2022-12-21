import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAuthToken } from '../../api';
import { login } from '../../api/modules/auth';
import { emptyFieldsList, isEmailValid } from '../../helpers/validators';
import AuthLayout from '../../layouts/AuthLayout';
import {
  setErrorNotification,
  setPageLoader,
  setSuccessNotification,
} from '../../redux/slices/appState';
import { setToken } from '../../redux/slices/user';
import { AuthFormContainer, ButtonsContainer } from '../../styles/Auth.styles';
import ActionButton from '../UI/Buttons/ActionButton';
import CustomInput from '../UI/Inputs/CustomInput';
import PasswordInput from '../UI/Inputs/PasswordInput';
import Loader from '../UI/Loader';
import NavLink from '../UI/NavLink';

const initialValues = { email: '', password: '' };

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const isPageLoading = useSelector((state) => state.appState.pageLoader);
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const handleChange = (field, value) => {
    setErrors({
      ...errors,
      [field]: '',
    });

    setFormValues({ ...formValues, [field]: value });
  };
  const handleSubmit = async () => {
    // Saving validation result as a variable
    const isValidEmail = isEmailValid(formValues.email);
    const emptyFields = emptyFieldsList(formValues);

    // Checking if inputed values are empty
    if (Object.keys(emptyFields).length) {
      return setErrors({
        ...errors,
        ...emptyFields,
      });
    }

    // Checking if email is valid
    if (!isValidEmail) {
      return setErrors({ ...errors, email: 'Invalid Email Address' });
    }

    // Api call for login
    try {
      setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setPageLoader(false));
    }, 250);
  }, []);

  if (isPageLoading) {
    return <Loader />;
  }

  return (
    <AuthLayout>
      <AuthFormContainer>
        <h2>Log In To The System</h2>
        <CustomInput
          label="Email"
          type="email"
          value={formValues.email}
          error={errors.email}
          handleChange={handleChange}
          field="email"
        />
        <PasswordInput
          field="password"
          value={formValues.password}
          error={errors.password}
          handleChange={handleChange}
        />
        <ButtonsContainer>
          <NavLink text="Sign Up" href="/signup" />
          <ActionButton
            text="Log In"
            onClick={handleSubmit}
            loading={isLoading}
          />
        </ButtonsContainer>
      </AuthFormContainer>
    </AuthLayout>
  );
};

export default Login;
