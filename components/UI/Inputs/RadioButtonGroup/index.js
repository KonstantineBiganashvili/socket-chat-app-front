import React from 'react';

import RadioButton from './RadioButton';
import {
  RadioButtonsContainer,
  RadioButtonsGroup,
} from './RadioButtonGroup.styles';

const RadioButtonGroup = ({ buttons, field, handleChange, selected }) => (
  <RadioButtonsContainer>
    Gender
    <RadioButtonsGroup>
      {buttons.map(({ name, value }) => (
        <RadioButton
          key={value}
          name={name}
          value={value}
          field={field}
          handleChange={handleChange}
          selected={selected}
        />
      ))}
    </RadioButtonsGroup>
  </RadioButtonsContainer>
);

export default RadioButtonGroup;
