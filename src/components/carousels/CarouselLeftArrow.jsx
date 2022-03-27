import React from 'react'
import { IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material'

const CarouselLeftArrow = ({ onClick, ...props }) => {
  return (
    <IconButton
      variant='contained'
      sx={ sx.button  }
      onClick={onClick}
      size="large">
      <ChevronLeft sx={ sx.icon  } />
    </IconButton>
  );
}

export default CarouselLeftArrow;

const sx = {
  icon: {
    height: 32,
    width: 32
  },
  button: {
    '&': {
      backgroundColor: 'common.white',
      position: 'absolute',
      left: 20
    }
  }
}
