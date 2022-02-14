import React from 'react';
import { styled, InputBase } from '@mui/material';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '50px',
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}));

const SearchBar = (props) => {
    
    return (
            <StyledInputBase
              value={props.value}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={props.onChange}
              />
    )
}
export default SearchBar;