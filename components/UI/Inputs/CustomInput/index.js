import React from 'react';

import { ErrorText, InputContainer, InputField } from '../Inputs.styles';

const CustomInput = ({
  label,
  type,
  value,
  error,
  handleChange,
  field,
  ...rest
}) => (
  <InputContainer>
    <label>{label}</label>
    <InputField
      type={type}
      value={value}
      error={error.length}
      onChange={({ target }) => handleChange(field, target.value)}
      {...rest}
    />
    <ErrorText>{error}</ErrorText>
  </InputContainer>
);

export default CustomInput;
