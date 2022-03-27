import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const ProductSkeleton = ({
    styles,
    ...props
  }) => {


  return (
    <Card sx={{...sx.root, ...styles }} elevation={0}>
      <Skeleton variant="rectangular" width={'100%'} height={220} />
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Card>
  );
}

export default ProductSkeleton

ProductSkeleton.propTypes = {
  styles: PropTypes.object,
};

const sx = {
  root: {
    width: '100%'
  },
};
