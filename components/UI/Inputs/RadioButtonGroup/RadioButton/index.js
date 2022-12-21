import React from 'react';

import {
  CustomRadioButton,
  Label,
  RadioButtonContainer,
} from './RadioButton.styles';

const RadioButton = ({ name, value, field, handleChange, selected }) => (
  <RadioButtonContainer>
    <CustomRadioButton
      onChange={() => {
        handleChange(field, value);
      }}
      type="radio"
      name={name}
      value={value}
      checked={value === selected}
    />
    <Label>{value}</Label>
  </RadioButtonContainer>
);

export default RadioButton;
