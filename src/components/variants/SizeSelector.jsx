import React from 'react'
import PropTypes from 'prop-types'
import { Button, Box, Typography } from '@mui/material';

const SizeSelector = ({
    option,
    selected,
    handleChange,
    styles,
    ...props
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles } }>
      <Typography variant='body2' color='textSecondary'>
        Select size
      </Typography>
      { option.values.map((value,i) => (
        <Button          
          key={i}
          sx={{ 
            ...sx.button,
            ...(selected === value && sx.active)
          }}
          color='primary'
          variant={ selected === value ? 'contained' : 'outlined' }
          onClick={() => handleChange("Size", value) }
        >
          { value }
        </Button>
      ))}
    </Box> 
  )
}

SizeSelector.propTypes = {
  selected: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default SizeSelector

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
