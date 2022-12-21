import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signup } from '../../api/modules/auth';
import {
  emptyFieldsList,
  isEmailValid,
  isPasswordStrong,
} from '../../helpers/validators';
import AuthLayout from '../../layouts/AuthLayout';
import {
  setErrorNotification,
  setPageLoader,
  setSuccessNotification,
} from '../../redux/slices/appState';
import { AuthFormContainer, ButtonsContainer } from '../../styles/Auth.styles';
import ActionButton from '../UI/Buttons/ActionButton';
import CustomInput from '../UI/Inputs/CustomInput';
import PasswordInput from '../UI/Inputs/PasswordInput';
import Loader from '../UI/Loader';
import NavLink from '../UI/NavLink';

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  date_of_birth: '',
  username: '',
  password: '',
  repeated_password: '',
};

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isPageLoading = useSelector((state) => state.appState.pageLoader);
  const [isLoading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const handleChange = (field, value) => {
    setErrors({
      ...errors,
      [field]: '',
    });

    setFormValues({ ...formValues, [field]: value });
  };

  const handleSignup = async () => {
    const isValidEmail = isEmailValid(formValues.email);
    const isStrongPassword = isPasswordStrong(formValues.password);
    const emptyFields = emptyFieldsList(formValues);

    if (Object.keys(emptyFields).length) {
      return setErrors({
        ...errors,
        ...emptyFields,
      });
    }

    if (!isValidEmail) {
      return setErrors({ ...errors, email: 'Invalid Email Address' });
    }

    if (formValues.password !== formValues.repeated_password) {
      return setErrors({
        ...errors,
        repeated_password: 'Passwords Do Not Match',
      });
    }

    if (!isStrongPassword) {
      return setErrors({
        ...errors,
        password: 'Password Is Too Weak',
      });
    }

    try {
      setLoading(true);

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
        <h2>Sign Up</h2>
        <CustomInput
          label="Email"
          type="email"
          value={formValues.email}
          error={errors.email}
          handleChange={handleChange}
          field="email"
        />
        <CustomInput
          label="First Name"
          type="text"
          value={formValues.first_name}
          error={errors.first_name}
          handleChange={handleChange}
          field="first_name"
        />
        <CustomInput
          label="Last Name"
          type="text"
          value={formValues.last_name}
          error={errors.last_name}
          handleChange={handleChange}
          field="last_name"
        />
        <CustomInput
          label="Date of Birth"
          type="date"
          value={formValues.date_of_birth}
          error={errors.date_of_birth}
          handleChange={handleChange}
          field="date_of_birth"
        />
        <CustomInput
          label="Username"
          type="text"
          value={formValues.username}
          error={errors.username}
          handleChange={handleChange}
          field="username"
        />
        <PasswordInput
          value={formValues.password}
          error={errors.password}
          handleChange={handleChange}
          field="password"
        />
        <PasswordInput
          value={formValues.repeated_password}
          error={errors.repeated_password}
          handleChange={handleChange}
          field="repeated_password"
        />
        <ButtonsContainer>
          <NavLink text="Log In" href="/login" />
          <ActionButton
            text="Sign Up"
            onClick={handleSignup}
            loading={isLoading}
          />
        </ButtonsContainer>
      </AuthFormContainer>
    </AuthLayout>
  );
};

export default SignUp;
