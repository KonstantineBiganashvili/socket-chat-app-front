import React from 'react';

import { CustomSelect, Option, SelectContainer } from './Select.styles';

const Select = ({ value, list, field, handleChange }) => (
  <SelectContainer>
    Country
    <CustomSelect
      value={value || ''}
      onChange={({ target }) => handleChange(field, target.value)}
    >
      <Option value="" hidden>
        Choose Your Country
      </Option>
      {list.map((listItem) => (
        <Option key={listItem.country} value={listItem.country}>
          {listItem.country}
        </Option>
      ))}
    </CustomSelect>
  </SelectContainer>
);

export default Select;
