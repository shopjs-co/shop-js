import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const ImageSkeleton = ({
    size=320,
    styles,
    ...props
  }) => {

  return (
    <Card sx={{...sx.root, ...styles }} elevation={0}>
      <Skeleton 
        variant="rectangular" 
        sx={{ 
            ...sx.skeleton,
            height: `${size}px`      
          }} 
        />
    </Card>
  );
}

ImageSkeleton.propTypes = {
  styles: PropTypes.object,
  size: PropTypes.number
};

export default ImageSkeleton

const sx = {
  root: {},
  skeleton: {
    width: '100%',
  },
};
