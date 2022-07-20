import React from 'react';
import { styled, InputBase } from '@mui/material';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        paddingTop: '40px',
        paddingBottom: '20px',
        paddingLeft: '50px',
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}));

const SearchBar = (props) => {
  const query = props.query;


    return (
            <StyledInputBase
              query={query}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={props.onChange}
              />
    )
}
export default SearchBar;