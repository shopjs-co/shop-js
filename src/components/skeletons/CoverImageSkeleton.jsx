import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '@mui/material/Skeleton';

const CoverImageSkeleton = ({
    styles,
    ...props
  }) => {

  return (
    <Skeleton
      variant="rectangular"
      sx={{ ...sx.skeleton, ...styles }}
    />
  );
}

CoverImageSkeleton.propTypes = {
  styles: PropTypes.object,
};

export default CoverImageSkeleton

const sx = {
  root: {},
  skeleton: {
    width: '100%',
    height: 420
  },
};
