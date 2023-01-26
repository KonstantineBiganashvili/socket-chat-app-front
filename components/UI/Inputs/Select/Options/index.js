import React from 'react';

import { Option } from './Options.styles';

const Options = ({ options }) => (
  <>
    {options.map((option) => (
      <Option key={option.id} value={option.value}>
        {option.label}
      </Option>
    ))}
  </>
);
export default Options;
