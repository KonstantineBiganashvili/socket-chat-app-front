import React from 'react';
import { useSelector } from 'react-redux';

import ActionButton from '../../UI/Buttons/ActionButton';
import CustomInput from '../../UI/Inputs/CustomInput';
import ImageInput from '../../UI/Inputs/ImageInput';
import PasswordInput from '../../UI/Inputs/PasswordInput';
import RadioButtonGroup from '../../UI/Inputs/RadioButtonGroup';
import Select from '../../UI/Inputs/Select';
import NavLink from '../../UI/NavLink';
import { ActionsContainer } from '../UserPage.styles';

const radioButtons = [
  {
    name: 'Gender',
    value: 'Male',
  },
  {
    name: 'Gender',
    value: 'Female',
  },
  {
    name: 'Gender',
    value: 'Other',
  },
];

const UserPageForm = ({
  formValues,
  errors,
  handleChange,
  handleChangeImg,
  handleDeleteImg,
  isUploading,
  buttonIsLoading,
  handleSubmit,
}) => {
  const { profile, countries } = useSelector((state) => state.user);

  return (
    <>
      <ImageInput
        isUploading={isUploading}
        src={formValues?.image?.photo_url || profile?.image?.photo_url}
        handleChange={handleChangeImg}
        handleDelete={handleDeleteImg}
      />
      <CustomInput
        type="email"
        label="Email"
        field="email"
        value={formValues.email}
        handleChange={handleChange}
        error={errors.email}
      />
      <CustomInput
        type="text"
        label="First Name"
        field="first_name"
        value={formValues.first_name}
        handleChange={handleChange}
        error={errors.first_name}
      />
      <CustomInput
        type="text"
        label="Last Name"
        field="last_name"
        value={formValues.last_name}
        handleChange={handleChange}
        error={errors.last_name}
      />
      <CustomInput
        type="date"
        label="Date of Birth"
        field="date_of_birth"
        value={formValues.date_of_birth}
        handleChange={handleChange}
        error={errors.date_of_birth}
      />
      <CustomInput
        type="text"
        label="Username"
        field="username"
        value={formValues.username}
        handleChange={handleChange}
        error={errors.username}
      />
      <CustomInput
        type="city"
        label="City"
        field="city"
        value={formValues.city}
        handleChange={handleChange}
        error=""
      />
      <Select
        value={formValues.country}
        list={countries}
        field="country"
        handleChange={handleChange}
      />
      <RadioButtonGroup
        buttons={radioButtons}
        field="gender"
        handleChange={handleChange}
        selected={formValues.gender}
      />
      <PasswordInput
        field="old_password"
        value={formValues.old_password}
        handleChange={handleChange}
        error=""
      />
      <PasswordInput
        field="repeated_old_password"
        value={formValues.repeated_old_password}
        handleChange={handleChange}
        error={errors.repeated_old_password}
      />
      <PasswordInput
        field="password"
        value={formValues.password}
        handleChange={handleChange}
        error=""
      />
      <ActionsContainer>
        <NavLink href="/" text="Cancel" />
        <ActionButton
          loading={buttonIsLoading}
          text="Submit"
          onClick={handleSubmit}
          disabled={isUploading}
        />
      </ActionsContainer>
    </>
  );
};

export default UserPageForm;
