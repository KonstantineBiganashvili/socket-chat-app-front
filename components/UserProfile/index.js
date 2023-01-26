import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  emptyFieldsList,
  isEmailValid,
  isPasswordStrong,
} from '../../helpers/validators';
import { deleteImgAction, getUserData } from '../../redux/actions/user';
import {
  setErrorNotification,
  setSuccessNotification,
} from '../../redux/slices/appState';
import { editUser, uploadImg } from '../../services/api/modules/user';
import Loader from '../UI/Loader';
import ProfileForm from './ProfileForm';
import { ProfileContainer } from './UserProfile.styles';

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

const UserProfile = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(initialValues);
  const [isUploading, setUploading] = useState(false);

  const { profile, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    const formData = new FormData();

    setUploading(true);
    const file = event.target.files[0];
    formData.append('file', file);

    try {
      const { data } = await uploadImg(formData);

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
      setSubmitting(true);
      const response = await editUser(profile.id, formValues);

      if (response.status === 200) {
        dispatch(setSuccessNotification('UserProfile Updated Successfully!'));
      }
    } catch (err) {
      dispatch(
        setErrorNotification(
          err?.response?.data?.response?.message ||
            'Oops... Something Went Wrong!',
        ),
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteImg = async (event) => {
    // Bubbling fix
    event.preventDefault();

    dispatch(deleteImgAction(profile));

    setFormValues({
      ...formValues,
      image: {},
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ProfileContainer>
      <ProfileForm
        formValues={formValues}
        errors={errors}
        handleChange={handleChange}
        handleChangeImg={handleChangeImg}
        handleDeleteImg={handleDeleteImg}
        isUploading={isUploading}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
      />
    </ProfileContainer>
  );
};

export default UserProfile;
