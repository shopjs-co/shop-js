import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  Box,
  IconButton,
  Input
} from '@mui/material';
import {
  Clear,
} from '@mui/icons-material'
import SearchIcon from '../../assets/search-icon.svg'

function SearchInput({
  value,
  handleChange,
  handleSearch,
  handleKeyPress,
  handleClear,
  ...rest
}) {

  const [expanded, setExpanded] = useState(false)

  const onFocus = () => setExpanded(true);
  const onBlur = () => setExpanded(false);

  return (
      <Box
        sx={ sx.root }
      >
        <span style={ sx.searchIcon }>
          <img src={ SearchIcon } />
        </span>
        <Input
          name='keywords'
          value={ value }
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={ handleChange }
          onKeyPress={ handleKeyPress }
          sx={{ 
            ...sx.searchInput, 
            ...(expanded && sx.active)            
          }}
          disableUnderline
          autoComplete="off"
          placeholder="Search"
        />
        <IconButton
          size='small'
          onClick={ handleClear }
          sx={{
            ...sx.button, 
            ...(!value && sx.hidden)
          }}
        >
          <Clear sx={ sx.icon  } />
        </IconButton>
      </Box> 
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func,
  handleClear: PropTypes.func
}

export default SearchInput;

const sx = {
  root: {
    height: 42,
    py: 0,
    pr: 1,
    pb: 0,
    pl: 2,
    display: 'flex',
    alignItems: 'center',
    ml: 'auto',
    borderRadius: 21,
    backgroundColor: 'common.input',
    flex: {
      sm: '1 1 auto',
      md: 'auto'
    }
  },
  hidden: {
    visibility: 'hidden'
  },
  searchInput: {
    width: 140,
    flexGrow: 1,
    transition: theme => theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  active: {
    width: 200
  },
  searchIcon: {
    mr: 1,
    color: 'icon'
  },
  icon: {
    height: 20,
    width: 20,
  },
  button: {
    ml: 2,
    display: {
      md: 'none',
      lg: 'block'
    }
  },
};
