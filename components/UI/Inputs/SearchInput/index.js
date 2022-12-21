import React from 'react';

import { InputField } from './SearchInput.styles';

const SearchInput = ({ handleHide, handleChange }) => (
  <InputField
    type="text"
    onChange={handleChange}
    placeholder="Input at least three characters"
    onBlur={() => {
      handleHide(true);
    }}
    onFocus={() => {
      handleHide(false);
    }}
  />
);

export default SearchInput;
