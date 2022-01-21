import React, { useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
//import { useDispatch } from "react-redux";

import { Search, SearchIconWrapper, StyledInputBase } from './styles';

function SearchBar() {
  const handleChange = () => {};

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={(e) => handleChange(e)}
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SearchBar;
