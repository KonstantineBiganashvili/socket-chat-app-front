import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { ErrorText, InputContainer, InputField } from '../Inputs.styles';
import PasswordVisibilityToggler from './PasswordInput.styles';

const PasswordInput = ({ value, error, handleChange, field }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((oldShowPassword) => !oldShowPassword);
  };

  const labelText = field
    .split('_')
    .map((char) => char[0].toUpperCase() + char.slice(1, char.length))
    .join(' ');

  return (
    <InputContainer>
      <label>{labelText}</label>
      <InputField
        type={showPassword ? 'text' : 'password'}
        value={value}
        error={error.length}
        onChange={({ target }) => handleChange(field, target.value)}
      />
      <ErrorText>{error}</ErrorText>
      <PasswordVisibilityToggler onClick={handleShowPassword}>
        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </PasswordVisibilityToggler>
    </InputContainer>
  );
};

export default PasswordInput;
