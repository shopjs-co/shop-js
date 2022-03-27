import React from 'react'
import { IconButton } from '@mui/material';

import { ChevronRight } from '@mui/icons-material'

const CarouselRightArrow = ({ onClick, ...props }) => {
  return (
    <IconButton
      variant='contained'
      sx={ sx.button  }
      onClick={onClick}
      size="large">
      <ChevronRight sx={ sx.icon  } />
    </IconButton>
  );
}

export default CarouselRightArrow;

const sx = {
  icon: {
    height: 32,
    width: 32
  },
  button: {
    '&': {
      backgroundColor: 'common.white',
      position: 'absolute',
      right: 20
    }
  }
}
