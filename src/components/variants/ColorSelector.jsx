import React from 'react'
import PropTypes from 'prop-types'
import { Button, Box } from '@mui/material';

const ColorSelector = ({
    option,
    selected,
    handleChange,
    styles,
    ...props
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles } }>
      { option.values.map((value,i) => (
        <Button
          key={i}
          sx={{ 
            ...sx.button, 
            ...(selected == value && sx.active)
          }}
          color='primary'
          variant={ selected === value ? 'contained' : 'outlined' }
          onClick={() => handleChange("Color", value)}
        >
          { value }
        </Button>
      ))}
    </Box> 
  )
}

ColorSelector.propTypes = {
  selected: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default ColorSelector

const sx = {
  root: {},
  active: {},
  button: {
    mt: 1,
    mr: 1,
    mb: 0,
    ml: 0
  }
}
