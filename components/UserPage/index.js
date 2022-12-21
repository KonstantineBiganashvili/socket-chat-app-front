import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteImg, editUser, uploadImg } from '../../api/modules/user';
import {
  emptyFieldsList,
  isEmailValid,
  isPasswordStrong,
} from '../../helpers/validators';
import { getUserData } from '../../redux/actions/user';
import {
  setErrorNotification,
  setSuccessNotification,
} from '../../redux/slices/appState';
import { setProfile } from '../../redux/slices/user';
import Loader from '../UI/Loader';
import { UserPageContainer } from './UserPage.styles';
import UserPageForm from './UserPageForm';

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  date_of_birth: '',
  username: '',
  city: '',
  country: '',
  gender: '',
  old_password: '',
  repeated_old_password: '',
  password: '',
  image: {
    image_name: '',
    photo_url: '',
  },
};

const UserPage = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [errors, setErrors] = useState(initialValues);
  const [isUploading, setUploading] = useState(false);
  const { profile, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formData = new FormData();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    setFormValues({
      ...formValues,
      ...profile,
    });
  }, [profile]);

  const handleChange = (field, value) => {
    setErrors({
      ...errors,
      [field]: '',
    });

    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleChangeImg = async (event) => {
    setUploading(true);
    const file = event.target.files[0];
    formData.append('file', file);

    try {
      const result = await uploadImg(formData);
      const { data } = result;

      setFormValues({
        ...formValues,
        image: data,
      });
    } catch (error) {
      setErrorNotification(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    const isValidEmail = isEmailValid(formValues.email);
    const isStrongPassword = isPasswordStrong(formValues.password);
    const emptyFields = emptyFieldsList({
      email: formValues.email,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      date_of_birth: formValues.date_of_birth,
      username: formValues.date_of_birth,
    });

    if (!isValidEmail) {
      return setErrors({ ...errors, email: 'Invalid Email Address' });
    }

    if (formValues.old_password !== formValues.repeated_old_password) {
      return setErrors({
        ...errors,
        repeated_old_password: 'Passwords Do Not Match',
      });
    }

    if (formValues.password.length && !isStrongPassword) {
      return setErrors({
        ...errors,
        password: 'Password Is Too Weak',
      });
    }

    if (Object.keys(emptyFields).length) {
      return setErrors({
        ...errors,
        ...emptyFields,
      });
    }

    try {
      setButtonIsLoading(true);
      const response = await editUser(profile.id, formValues);

      if (response.status === 200) {
        dispatch(setSuccessNotification('Profile Updated Successfully!'));
      }
    } catch (err) {
      dispatch(
        setErrorNotification(
          err?.response?.data?.response?.message ||
            'Oops... Something Went Wrong!',
        ),
      );
    } finally {
      setButtonIsLoading(false);
    }
  };

  const handleDeleteImg = async (event) => {
    event.preventDefault();

    setFormValues({
      ...formValues,
      image: {},
    });

    dispatch(setProfile({ ...profile, image: {} }));

    try {
      await deleteImg(profile.image);
    } catch (err) {
      setErrorNotification(
        err?.response?.data?.response?.message ||
          'Oops... Something Went Wrong!',
      );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <UserPageContainer>
      <UserPageForm
        formValues={formValues}
        errors={errors}
        handleChange={handleChange}
        handleChangeImg={handleChangeImg}
        handleDeleteImg={handleDeleteImg}
        isUploading={isUploading}
        buttonIsLoading={buttonIsLoading}
        handleSubmit={handleSubmit}
      />
    </UserPageContainer>
  );
};

export default UserPage;
