import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const CollectionSkeleton = ({
    styles,
    ...props
  }) => {

  return (
    <Card sx={{...sx.root, ...styles }} elevation={0}>
      <Skeleton variant="rectangular" sx={ sx.skeleton  } />
    </Card>
  );
}

CollectionSkeleton.propTypes = {
  styles: PropTypes.object,
};

export default CollectionSkeleton

const sx = {
  root: {},
  skeleton: {
    width: '100%',
    height: 320
  },
};
