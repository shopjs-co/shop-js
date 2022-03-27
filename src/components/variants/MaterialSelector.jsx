import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from '@mui/material';

const MaterialSelector = ({
    option,
    selected,
    handleChange,
    styles,
    ...props
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles } }>
      <Typography variant='body2' color='textSecondary'>
        Select material
      </Typography>
      { option.values.map((value,i) => (
        <Button
          key={i}
          className={clsx(classes.button,{
            [classes.active]: selected === value
          })}
          color='primary'
          variant={ selected === value ? 'contained' : 'outlined' }
          onClick={() => handleChange("Material", value) }
        >
          { value }
        </Button>
      ))}
    </Box> 
  )
}

MaterialSelector.propTypes = {
  selected: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default MaterialSelector

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
