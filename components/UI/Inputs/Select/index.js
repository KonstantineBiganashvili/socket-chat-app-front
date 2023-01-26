import React from 'react';

import Options from './Options';
import { CustomSelect, Option, SelectContainer } from './Select.styles';

const Select = ({
  value,
  options,
  field,
  handleChange,
  name,
  defaultValue,
}) => {
  const onChangeHandle = ({ target }) => {
    handleChange(field, target.value);
  };

  return (
    <SelectContainer>
      {name}
      <CustomSelect value={value || ''} onChange={onChangeHandle}>
        <Option value="" hidden>
          {defaultValue}
        </Option>
        <Options options={options} />
      </CustomSelect>
    </SelectContainer>
  );
};

export default Select;
