import React, { useCallback, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';

import { searchUsers } from '../../../../api/modules/user';
import debounce from '../../../../helpers/debounce';
import highlightUsername from '../../../../helpers/highlightUsername';
import { setErrorNotification } from '../../../../redux/slices/appState';
import SearchInput from '../../Inputs/SearchInput';
import UserList from '../../UserList';
import {
  InputContainer,
  ListContainer,
  SearchContainer,
  SearchLoader,
} from './Search.styles';

const Search = () => {
  const [isHidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([]);

  const dispatch = useDispatch();

  const handleHide = (value) => setHidden(value);

  const handleSearch = async (event) => {
    const { value } = event.target;

    setSearchValue(value);
    setLoading(true);

    if (value.length >= 3) {
      try {
        const { data } = await searchUsers(value);
        setSearchedUsers(highlightUsername(value, data));
      } catch (error) {
        dispatch(setErrorNotification(error.message));
      } finally {
        setLoading(false);
      }

      return;
    }

    setSearchedUsers([]);
    setLoading(false);
  };

  // useCallback to memoize the function and not return the same function on every call
  const handleChange = useCallback(debounce(handleSearch, 1000), []);

  return (
    <SearchContainer>
      <InputContainer>
        <SearchInput handleHide={handleHide} handleChange={handleChange} />
        <SearchLoader>
          <BallTriangle
            height={40}
            width={40}
            radius={5}
            color="#D5BDAF"
            ariaLabel="ball-triangle-loading"
            visible={loading}
          />
        </SearchLoader>
      </InputContainer>
      <ListContainer>
        <UserList
          users={searchedUsers}
          isHidden={isHidden}
          searchValue={searchValue}
        />
      </ListContainer>
    </SearchContainer>
  );
};

export default Search;
